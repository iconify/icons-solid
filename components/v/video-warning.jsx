import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/t/t0yodebcq.css';
import '../../css/i/irpsjq9hr.css';
import '../../css/y/y9szotbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fi-43sb1e"/><path class="t0yodebcq"/><path class="irpsjq9hr"/><path class="y9szotbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-warning"} {...others} />);
}

export default Component;
