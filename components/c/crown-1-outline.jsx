import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khamr3agh.css';
import '../../css/s/sr0tz7bgb.css';
import '../../css/u/ul7qsbczf.css';
import '../../css/y/ygy01sibr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="khamr3agh"/><path class="sr0tz7bgb"/><path clip-rule="evenodd" class="ul7qsbczf"/><path class="ygy01sibr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-1-outline"} {...others} />);
}

export default Component;
