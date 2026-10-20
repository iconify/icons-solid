import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k470z5bpj.css';
import '../../css/y/y6r5hibqf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k470z5bpj"/><path class="y6r5hibqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lightbulb-sparkle-20-bold"} {...others} />);
}

export default Component;
