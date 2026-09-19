import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z-4z5xbxi.css';
import '../../css/m/mn2v80buw.css';
import '../../css/s/s90fclbac.css';
import '../../css/z/zntjxwbwy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z-4z5xbxi"/><path class="mn2v80buw"/><path class="s90fclbac"/><path class="zntjxwbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:strikethrough"} {...others} />);
}

export default Component;
