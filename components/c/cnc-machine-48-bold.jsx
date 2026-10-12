import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzpmmxj6m.css';
import '../../css/e/ez71_mloi.css';
import '../../css/h/hc5gysb_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzpmmxj6m"/><path class="ez71_mloi"/><path class="hc5gysb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cnc-machine-48-bold"} {...others} />);
}

export default Component;
