import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb3xjqbob.css';
import '../../css/y/yennaobau.css';
import '../../css/r/rk2pofpji.css';
import '../../css/u/ur75d4b3g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hb3xjqbob"/><path class="yennaobau"/><path class="rk2pofpji"/><path class="ur75d4b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-sun-48"} {...others} />);
}

export default Component;
