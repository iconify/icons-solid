import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtj37ub3j.css';
import '../../css/y/yvc3dk4hi.css';
import '../../css/g/g9srdqbje.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vtj37ub3j"/><path class="yvc3dk4hi"/><path class="g9srdqbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-battery-bold"} {...others} />);
}

export default Component;
