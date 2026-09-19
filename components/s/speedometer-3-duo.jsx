import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_5je2bdi.css';
import '../../css/d/dmxtwacpa.css';
import '../../css/o/ofb6srb-u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s_5je2bdi"/><path class="dmxtwacpa"/><path class="ofb6srb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:speedometer-3-duo"} {...others} />);
}

export default Component;
