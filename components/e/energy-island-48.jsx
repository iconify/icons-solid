import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqowxovzl.css';
import '../../css/p/ppnqabcct.css';
import '../../css/u/ue8aopqvy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hqowxovzl"/><path class="ppnqabcct"/><path class="ue8aopqvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-island-48"} {...others} />);
}

export default Component;
