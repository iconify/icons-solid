import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1a4a86lw.css';
import '../../css/w/ws4eaebxn.css';
import '../../css/r/rne_7o1uu.css';
import '../../css/i/i7ns3xxod.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v1a4a86lw"/><path class="ws4eaebxn"/><path class="rne_7o1uu"/><path class="i7ns3xxod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sunflower"} {...others} />);
}

export default Component;
