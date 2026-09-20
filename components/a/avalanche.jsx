import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi3vdnbck.css';
import '../../css/b/byal82bxd.css';

const viewBox = {"width":1503,"height":1504};
const content = `<g class="ft5dv1b6b"><path class="pi3vdnbck"/><path clip-rule="evenodd" class="byal82bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:avalanche"} {...others} />);
}

export default Component;
