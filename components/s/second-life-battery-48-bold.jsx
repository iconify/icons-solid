import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7ymvhzeq.css';
import '../../css/f/fxgii4b0e.css';
import '../../css/g/gh0u09crw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b7ymvhzeq"/><path class="fxgii4b0e"/><path class="gh0u09crw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:second-life-battery-48-bold"} {...others} />);
}

export default Component;
