import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cax-wgxpq.css';
import '../../css/i/i83qznx_e.css';
import '../../css/f/fbw3z9btk.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="cax-wgxpq"/><path class="i83qznx_e"/><path class="fbw3z9btk"/><circle transform="matrix(0 -1 -1 0 24 34)" class="fduciibru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:battery-tips"} {...others} />);
}

export default Component;
