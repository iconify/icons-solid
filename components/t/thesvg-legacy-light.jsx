import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/soghoobqa.css';
import '../../css/g/go950ibtp.css';
import '../../css/q/q3cezkbtc.css';
import '../../css/i/i2k0e8bti.css';
import '../../css/t/ti-xpgb7o.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="soghoobqa"/><rect class="go950ibtp"/><rect class="q3cezkbtc"/><path class="i2k0e8bti"/><path class="ti-xpgb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:thesvg-legacy-light"} {...others} />);
}

export default Component;
