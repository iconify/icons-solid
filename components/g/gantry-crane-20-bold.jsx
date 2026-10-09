import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0224gbwy.css';
import '../../css/s/s149jjboe.css';
import '../../css/j/jqow3gbkz.css';
import '../../css/l/lb3olt71m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f0224gbwy"/><path class="s149jjboe"/><path class="jqow3gbkz"/><path class="lb3olt71m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gantry-crane-20-bold"} {...others} />);
}

export default Component;
