import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu1gnobxb.css';
import '../../css/r/r_8asobqy.css';
import '../../css/f/fwij3dbdn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wu1gnobxb"/><path class="r_8asobqy"/><path class="fwij3dbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-island-48-bold"} {...others} />);
}

export default Component;
