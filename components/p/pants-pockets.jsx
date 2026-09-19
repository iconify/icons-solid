import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ks0d2dpfw.css';
import '../../css/v/v-oh1e5em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ks0d2dpfw"/><path class="v-oh1e5em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pants-pockets"} {...others} />);
}

export default Component;
