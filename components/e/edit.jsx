import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le33hqf6m.css';
import '../../css/w/wz94lmb_y.css';
import '../../css/o/o57o9vpnw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="le33hqf6m"/><path clip-rule="evenodd" class="wz94lmb_y"/><path class="o57o9vpnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:edit"} {...others} />);
}

export default Component;
