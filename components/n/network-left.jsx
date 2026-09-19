import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i1lh78f0p.css';
import '../../css/l/ldvrnsb6k.css';
import '../../css/p/paa1-5tox.css';
import '../../css/m/m3dcrbb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><rect transform="rotate(-90 2 21)" class="i1lh78f0p"/><rect transform="rotate(-90 17 15.5)" class="ldvrnsb6k"/><rect transform="rotate(-90 2 10)" class="paa1-5tox"/><path class="m3dcrbb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:network-left"} {...others} />);
}

export default Component;
