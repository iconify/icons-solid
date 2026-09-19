import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trpzqny1k.css';
import '../../css/v/v08y7ubux.css';
import '../../css/n/nd_0q65lq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="trpzqny1k"/><path clip-rule="evenodd" class="v08y7ubux"/><path class="nd_0q65lq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:speedometer-3-outline"} {...others} />);
}

export default Component;
