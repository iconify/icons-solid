import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dicbf-s8h.css';
import '../../css/r/rlibz_uqk.css';
import '../../css/u/u-mp0ou6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="dicbf-s8h"/><path class="rlibz_uqk"/><path class="u-mp0ou6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:squares-duotone"} {...others} />);
}

export default Component;
