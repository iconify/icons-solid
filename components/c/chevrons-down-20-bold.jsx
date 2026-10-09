import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj-p4p_9x.css';
import '../../css/u/uavtgqbwb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kj-p4p_9x"/><path class="uavtgqbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-down-20-bold"} {...others} />);
}

export default Component;
