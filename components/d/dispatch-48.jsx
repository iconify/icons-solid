import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir025xb6j.css';
import '../../css/k/kgirabbda.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ir025xb6j"/><path class="kgirabbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dispatch-48"} {...others} />);
}

export default Component;
