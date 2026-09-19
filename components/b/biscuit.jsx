import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bzalpzb0t.css';
import '../../css/z/zh3wrzwfv.css';
import '../../css/a/aixh0kbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bzalpzb0t"/><path class="zh3wrzwfv"/><path class="aixh0kbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:biscuit"} {...others} />);
}

export default Component;
