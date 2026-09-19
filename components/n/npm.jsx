import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yb79lbbgc.css';
import '../../css/r/rtv17ra5c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="yb79lbbgc"/><path class="rtv17ra5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:npm"} {...others} />);
}

export default Component;
