import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5cmpabez.css';
import '../../css/j/jqhtdhbem.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t5cmpabez"/><path class="jqhtdhbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:router-48"} {...others} />);
}

export default Component;
