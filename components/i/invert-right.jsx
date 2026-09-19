import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ukwelccvm.css';
import '../../css/k/koa2bfbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ukwelccvm"/><path class="koa2bfbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:invert-right"} {...others} />);
}

export default Component;
