import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i951ry2rv.css';
import '../../css/a/a8zuojujy.css';
import '../../css/p/pestg6bls.css';
import '../../css/p/ps7trjwfg.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/k/kx5fkyhqd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG9nHgsdVq)" class="i951ry2rv"/><path fill="url(#SVGFmfTtb3k)" clip-rule="evenodd" class="a8zuojujy"/><defs><linearGradient id="SVG9nHgsdVq" x1="4.5" x2="15" y1="3" y2="18.5" gradientUnits="userSpaceOnUse"><stop class="pestg6bls"/><stop offset="1" class="ps7trjwfg"/></linearGradient><linearGradient id="SVGFmfTtb3k" x1="7.348" x2="10.473" y1="10.265" y2="13.514" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="kx5fkyhqd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:dismiss-circle-20"} {...others} />);
}

export default Component;
