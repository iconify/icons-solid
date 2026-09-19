import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-kwgp5vg.css';
import '../../css/u/ujjz19bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-kwgp5vg"/><path class="ujjz19bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-hexagon"} {...others} />);
}

export default Component;
