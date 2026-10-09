import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvli3kbsk.css';
import '../../css/j/j2_5lrbxi.css';
import '../../css/p/pj0row0jd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pvli3kbsk"/><path class="j2_5lrbxi"/><path class="pj0row0jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kite-48-bold"} {...others} />);
}

export default Component;
