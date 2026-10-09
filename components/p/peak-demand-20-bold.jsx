import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owfg3hrsx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="owfg3hrsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peak-demand-20-bold"} {...others} />);
}

export default Component;
