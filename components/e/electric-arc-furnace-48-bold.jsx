import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqszs5bfa.css';
import '../../css/e/et3b916ly.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cqszs5bfa"/><path class="et3b916ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-arc-furnace-48-bold"} {...others} />);
}

export default Component;
