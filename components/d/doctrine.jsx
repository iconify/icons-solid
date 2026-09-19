import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u641ht8nk.css';
import '../../css/e/efxthlbus.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u641ht8nk"/><path class="efxthlbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:doctrine"} {...others} />);
}

export default Component;
