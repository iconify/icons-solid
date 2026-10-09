import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j50zvhxpr.css';
import '../../css/e/ey0nx0bof.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j50zvhxpr"/><path class="ey0nx0bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-to-line-48-bold"} {...others} />);
}

export default Component;
