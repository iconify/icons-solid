import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/goa09ps5z.css';
import '../../css/d/dj93w8hwn.css';
import '../../css/h/h4b65463d.css';
import '../../css/p/pbawa5dwi.css';
import '../../css/y/yefaohhec.css';
import '../../css/b/bp2k2uyln.css';
import '../../css/w/wmc2muevq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="goa09ps5z"/><path class="dj93w8hwn"/><path class="h4b65463d"/><path class="pbawa5dwi"/><path class="yefaohhec"/><path class="bp2k2uyln"/><path class="wmc2muevq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:programming-share"} {...others} />);
}

export default Component;
