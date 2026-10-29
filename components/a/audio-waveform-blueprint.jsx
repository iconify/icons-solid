import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bemidachf.css';
import '../../css/g/g2xclxbug.css';
import '../../css/b/bt34uhgkb.css';
import '../../css/g/gzqs1_b0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bemidachf wm-deco"/><path class="g2xclxbug wm-deco"/><path class="bt34uhgkb"/><path class="gzqs1_b0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-waveform-blueprint"} {...others} />);
}

export default Component;
