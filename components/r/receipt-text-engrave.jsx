import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ufgy3r3fq.css';
import '../../css/o/oi26-bbrd.css';
import '../../css/r/ri2oegbdi.css';
import '../../css/w/w302-hd8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ufgy3r3fq wm-k"/><path class="oi26-bbrd wm-shadow"/><path class="ri2oegbdi wm-k"/><path class="w302-hd8l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:receipt-text-engrave"} {...others} />);
}

export default Component;
