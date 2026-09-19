import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thjqxcbko.css';
import '../../css/s/szm-i86fs.css';
import '../../css/l/lt7gces4x.css';
import '../../css/v/vxgnncc0p.css';
import '../../css/r/r6w0b87ef.css';
import '../../css/u/ui46oacyp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="thjqxcbko"/><path clip-rule="evenodd" class="szm-i86fs"/><path class="lt7gces4x"/><path class="vxgnncc0p"/><path clip-rule="evenodd" class="r6w0b87ef"/><path class="ui46oacyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cloudy-partly-outline"} {...others} />);
}

export default Component;
