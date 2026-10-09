import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-pj1ullj.css';
import '../../css/v/vfwj5rb6n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l-pj1ullj"/><path class="vfwj5rb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calculator-48-bold"} {...others} />);
}

export default Component;
