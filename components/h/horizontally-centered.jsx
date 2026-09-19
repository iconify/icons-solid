import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xpua17bdp.css';
import '../../css/y/y3tc9-bzh.css';
import '../../css/t/tv_gun5-p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="xpua17bdp"/><path class="y3tc9-bzh"/><path class="tv_gun5-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:horizontally-centered"} {...others} />);
}

export default Component;
