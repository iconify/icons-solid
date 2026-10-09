import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghdyryixw.css';
import '../../css/n/n_bg76bsh.css';
import '../../css/q/qva2skqil.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ghdyryixw"/><path class="n_bg76bsh"/><path class="qva2skqil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lay-vessel-20"} {...others} />);
}

export default Component;
