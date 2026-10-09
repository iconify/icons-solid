import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4fxe_2wu.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/f/fxwh4ibmc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g4fxe_2wu"/><path class="qb-anoa-e"/><path class="fxwh4ibmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:igloo-20-bold"} {...others} />);
}

export default Component;
