import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6xwa879m.css';
import '../../css/i/i1hgre67m.css';
import '../../css/s/srewe004d.css';
import '../../css/j/jrsb6f_rb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a6xwa879m"/><path class="i1hgre67m"/><path class="srewe004d"/><path class="jrsb6f_rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-oven-20"} {...others} />);
}

export default Component;
