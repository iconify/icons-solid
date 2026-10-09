import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4-c966ww.css';
import '../../css/a/au8t5v7zm.css';
import '../../css/g/gk48d415h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h4-c966ww"/><path class="au8t5v7zm"/><path class="gk48d415h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-48"} {...others} />);
}

export default Component;
