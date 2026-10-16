import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksschrb-d.css';
import '../../css/q/qy95ayb8d.css';
import '../../css/g/g3wis4bce.css';
import '../../css/t/tsy-snfbs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ksschrb-d"/><path class="qy95ayb8d"/><path class="g3wis4bce"/><path class="tsy-snfbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelbarrow-20-bold"} {...others} />);
}

export default Component;
