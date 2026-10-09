import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzh-h4k4i.css';
import '../../css/l/lvvelyb5g.css';
import '../../css/r/r9j5p4bxh.css';
import '../../css/u/ux587345u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzh-h4k4i"/><path class="lvvelyb5g"/><path class="r9j5p4bxh"/><path class="ux587345u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-48"} {...others} />);
}

export default Component;
