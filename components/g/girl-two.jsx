import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/u/ujvxwsb7k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="ujvxwsb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:girl-two"} {...others} />);
}

export default Component;
