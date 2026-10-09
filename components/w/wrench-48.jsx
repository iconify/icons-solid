import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbiwgmbyr.css';
import '../../css/h/hbyu2bdtl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jbiwgmbyr"/><path class="hbyu2bdtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrench-48"} {...others} />);
}

export default Component;
