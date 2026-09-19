import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h4-__3b9e.css';
import '../../css/y/y2090kb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h4-__3b9e"/><path class="y2090kb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:glass-half-alt"} {...others} />);
}

export default Component;
