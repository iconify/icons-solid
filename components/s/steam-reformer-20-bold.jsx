import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7ggesbml.css';
import '../../css/b/by_x3ac6t.css';
import '../../css/s/saqzqrcve.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n7ggesbml"/><path class="by_x3ac6t"/><path class="saqzqrcve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steam-reformer-20-bold"} {...others} />);
}

export default Component;
