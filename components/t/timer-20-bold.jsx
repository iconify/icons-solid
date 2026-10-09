import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4i7afb6c.css';
import '../../css/z/zjxzq32mp.css';
import '../../css/s/s9gv9gb6v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o4i7afb6c"/><path class="zjxzq32mp"/><path class="s9gv9gb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timer-20-bold"} {...others} />);
}

export default Component;
