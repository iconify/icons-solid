import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5ebr9bjc.css';
import '../../css/n/ng0ti4b2j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p5ebr9bjc"/><path class="ng0ti4b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fast-48"} {...others} />);
}

export default Component;
