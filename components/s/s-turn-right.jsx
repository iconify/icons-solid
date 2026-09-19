import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/v2d09-zvp.css';
import '../../css/w/w-mxnd3nu.css';
import '../../css/w/wx5q00nsv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="v2d09-zvp"/><path class="w-mxnd3nu"/><circle transform="rotate(-180 37.176 10)" class="wx5q00nsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:s-turn-right"} {...others} />);
}

export default Component;
