import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u3uh19bmf.css';
import '../../css/l/lkliae68h.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u3uh19bmf"/><path class="lkliae68h"/><path class="ysqi2pc_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:doc-magnifying-glass-in"} {...others} />);
}

export default Component;
