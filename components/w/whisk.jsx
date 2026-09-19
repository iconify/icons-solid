import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/axxphcgys.css';
import '../../css/m/ma-1r2bqx.css';
import '../../css/e/evxn836au.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="axxphcgys"/><path class="ma-1r2bqx"/><path class="evxn836au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:whisk"} {...others} />);
}

export default Component;
