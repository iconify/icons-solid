import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuyycrb6d.css';
import '../../css/i/izzti6-0z.css';
import '../../css/g/gamxx9z1h.css';
import '../../css/n/nuh5gzbto.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zuyycrb6d"/><path clip-rule="evenodd" class="izzti6-0z"/><path class="gamxx9z1h"/><path clip-rule="evenodd" class="nuh5gzbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:kiss-beam-outline"} {...others} />);
}

export default Component;
