import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp_dhhbys.css';
import '../../css/e/ewqmb9jcq.css';
import '../../css/h/hizyf0byk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cp_dhhbys"/><path class="ewqmb9jcq"/><path class="hizyf0byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fan-20-bold"} {...others} />);
}

export default Component;
