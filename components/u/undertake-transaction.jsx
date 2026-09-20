import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpb2ehltb.css';
import '../../css/p/px1jy7twn.css';
import '../../css/h/h5nbl63hy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vpb2ehltb"/><path clip-rule="evenodd" class="px1jy7twn"/><path class="h5nbl63hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:undertake-transaction"} {...others} />);
}

export default Component;
