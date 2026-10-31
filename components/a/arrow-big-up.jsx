import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y5bh3jb9c.css';
import '../../css/p/p83undbxt.css';
import '../../css/m/m-32ofbyd.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y5bh3jb9c"/><path class="p83undbxt wm-shine"/><path class="m-32ofbyd"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:arrow-big-up"} {...others} />);
}

export default Component;
