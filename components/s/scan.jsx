import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vu5hsac0o.css';
import '../../css/m/mxqq5lbuu.css';
import '../../css/o/o0ihot2mh.css';
import '../../css/j/j75bsibgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vu5hsac0o wm-shadow"/><path class="mxqq5lbuu wm-shadow"/><path class="o0ihot2mh"/><path class="j75bsibgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scan"} {...others} />);
}

export default Component;
