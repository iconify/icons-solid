import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2mz6fbaj.css';
import '../../css/l/loq84tx7i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j2mz6fbaj"/><path class="loq84tx7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rupee-48"} {...others} />);
}

export default Component;
