import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-31xg9_q.css';
import '../../css/b/bniz3z8pj.css';
import '../../css/e/e52-lccxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g-31xg9_q"/><path class="bniz3z8pj wm-shadow"/><path class="e52-lccxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:barcode-engrave"} {...others} />);
}

export default Component;
