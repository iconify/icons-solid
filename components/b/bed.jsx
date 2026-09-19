import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7kc_s51c.css';
import '../../css/r/rgcaz9bqd.css';
import '../../css/h/hw-s9nbyd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h7kc_s51c"/><path class="rgcaz9bqd"/><path class="hw-s9nbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bed"} {...others} />);
}

export default Component;
