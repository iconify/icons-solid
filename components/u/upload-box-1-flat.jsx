import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mibyxt_3y.css';
import '../../css/z/z7huj2b8v.css';
import '../../css/z/zyek7vb5u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mibyxt_3y"/><path clip-rule="evenodd" class="z7huj2b8v"/><path clip-rule="evenodd" class="zyek7vb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:upload-box-1-flat"} {...others} />);
}

export default Component;
