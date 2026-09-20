import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c9ns0wb1n.css';
import '../../css/m/mnw43chky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="c9ns0wb1n"/><path class="mnw43chky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-circle-bar"} {...others} />);
}

export default Component;
