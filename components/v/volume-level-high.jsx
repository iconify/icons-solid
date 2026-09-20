import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wa_o9obqo.css';
import '../../css/y/y4pm99bhn.css';
import '../../css/b/bpb-me2oe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wa_o9obqo"/><path class="y4pm99bhn"/><path class="bpb-me2oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:volume-level-high"} {...others} />);
}

export default Component;
