import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uoxth4t8w.css';
import '../../css/o/ogeuw0bqm.css';
import '../../css/a/ax1-ht12b.css';
import '../../css/n/nnixupllg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uoxth4t8w"/><path class="ogeuw0bqm wm-shadow"/><path class="ax1-ht12b"/><path class="nnixupllg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tennis-engrave"} {...others} />);
}

export default Component;
