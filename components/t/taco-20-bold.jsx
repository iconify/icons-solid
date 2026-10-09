import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euckcfb8p.css';
import '../../css/h/h3oyx7bzn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="euckcfb8p"/><path class="h3oyx7bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:taco-20-bold"} {...others} />);
}

export default Component;
