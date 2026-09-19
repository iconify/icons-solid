import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn2830bka.css';
import '../../css/v/vgycreacb.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bn2830bka"/><path class="vgycreacb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-stat-alt"} {...others} />);
}

export default Component;
