import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vair9pb3c.css';
import '../../css/a/aefh2l9ec.css';
import '../../css/y/y4dimgwff.css';
import '../../css/b/bqc5v5i0u.css';
import '../../css/c/c56cyccsu.css';
import '../../css/m/mnc_mn91u.css';
import '../../css/r/rzse9o8tr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vair9pb3c"/><path class="aefh2l9ec"/><path clip-rule="evenodd" class="y4dimgwff"/><path class="bqc5v5i0u"/><path class="c56cyccsu"/><path class="mnc_mn91u"/><path class="rzse9o8tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:screensaver-monitor-wallpaper"} {...others} />);
}

export default Component;
