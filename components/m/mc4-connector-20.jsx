import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el1gyzb_x.css';
import '../../css/g/gbea4f04d.css';
import '../../css/z/zeu5ekosw.css';
import '../../css/i/ix55rn85a.css';
import '../../css/b/bmn4lj2dh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="el1gyzb_x"/><path class="gbea4f04d"/><path class="zeu5ekosw"/><path class="ix55rn85a"/><path class="bmn4lj2dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mc4-connector-20"} {...others} />);
}

export default Component;
