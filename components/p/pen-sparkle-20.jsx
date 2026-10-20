import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3320-d5h.css';
import '../../css/m/mt6c1q4zg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z3320-d5h"/><path class="mt6c1q4zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pen-sparkle-20"} {...others} />);
}

export default Component;
