import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo80zdb5v.css';
import '../../css/j/j0gy5bmgj.css';
import '../../css/k/kq9dq2bah.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vo80zdb5v"/><path clip-rule="evenodd" class="j0gy5bmgj"/><path class="kq9dq2bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:eye-optic-flat"} {...others} />);
}

export default Component;
