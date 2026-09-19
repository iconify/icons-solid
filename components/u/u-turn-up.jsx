import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yiy1b3n8l.css';
import '../../css/o/o4ouqrbli.css';
import '../../css/x/xy_xzzmno.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="yiy1b3n8l"/><path class="o4ouqrbli"/><circle transform="rotate(-90 13 9)" class="xy_xzzmno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:u-turn-up"} {...others} />);
}

export default Component;
