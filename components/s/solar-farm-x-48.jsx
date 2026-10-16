import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9ufck1xu.css';
import '../../css/o/oc4c5hbmp.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e9ufck1xu"/><path class="oc4c5hbmp"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-x-48"} {...others} />);
}

export default Component;
