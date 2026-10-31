import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kjrzx5bmv.css';
import '../../css/p/pxw44dr5y.css';
import '../../css/r/r7p23bc9z.css';
import '../../css/f/fm6rnqb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kjrzx5bmv wm-shadow"/><path class="pxw44dr5y wm-shadow"/><path class="r7p23bc9z"/><path class="fm6rnqb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:audio-waveform"} {...others} />);
}

export default Component;
