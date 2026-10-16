import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvzui74pn.css';
import '../../css/u/uxmtnwu0t.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dvzui74pn"/><path class="uxmtnwu0t"/><path class="rb9owibwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loan-48-bold"} {...others} />);
}

export default Component;
