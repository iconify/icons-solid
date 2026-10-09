import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujimcnb1a.css';
import '../../css/w/wuwoojhmz.css';
import '../../css/v/v4s55l-rk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ujimcnb1a"/><path class="wuwoojhmz"/><path class="v4s55l-rk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-meter-20-bold"} {...others} />);
}

export default Component;
