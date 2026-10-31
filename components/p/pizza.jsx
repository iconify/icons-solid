import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/say9z7j7b.css';
import '../../css/l/l7q_zgbtf.css';
import '../../css/z/z263-nngx.css';
import '../../css/u/ub5a4-byi.css';
import '../../css/r/rggh7obei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="say9z7j7b wm-shadow"/><path class="l7q_zgbtf wm-shadow"/><path class="z263-nngx"/><path class="ub5a4-byi"/><path class="rggh7obei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pizza"} {...others} />);
}

export default Component;
