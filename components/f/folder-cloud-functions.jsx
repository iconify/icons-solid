import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/wizsllbsf.css';
import '../../css/r/r2jotkb5j.css';
import '../../css/i/iqbdq2_hf.css';
import '../../css/o/oxaaevbpg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="kuf42lb8e"><defs><path id="SVGF6nSbbPT" class="wizsllbsf"/></defs><path class="r2jotkb5j"/><path class="iqbdq2_hf"/><use href="#SVGF6nSbbPT" transform="translate(0 -1)"/><use href="#SVGF6nSbbPT" transform="matrix(1 0 0 -1 0 20)"/><path class="oxaaevbpg"/><use href="#SVGF6nSbbPT" transform="matrix(-1 0 0 1 23 -1)"/><use href="#SVGF6nSbbPT" transform="rotate(180 11.5 10)"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cloud-functions"} {...others} />);
}

export default Component;
