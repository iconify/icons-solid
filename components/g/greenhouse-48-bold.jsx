import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/css7eeb7b.css';
import '../../css/s/sfw5-4b4t.css';
import '../../css/l/l8okk4b6r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="css7eeb7b"/><path class="sfw5-4b4t"/><path class="l8okk4b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-48-bold"} {...others} />);
}

export default Component;
