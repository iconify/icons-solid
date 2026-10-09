import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8l47cczo.css';
import '../../css/o/omo7ytb6n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t8l47cczo"/><path class="omo7ytb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-vertical-48-bold"} {...others} />);
}

export default Component;
