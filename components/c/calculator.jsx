import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux8t0hbvv.css';
import '../../css/s/s9s7xp23i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ux8t0hbvv"/><path class="s9s7xp23i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calculator"} {...others} />);
}

export default Component;
