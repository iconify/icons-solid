import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yomuny0gy.css';
import '../../css/d/ddw8yibsz.css';
import '../../css/b/b9krxjjyz.css';
import '../../css/x/xi9didpkb.css';
import '../../css/l/l12ea1bdz.css';
import '../../css/g/g5-8vgb-f.css';
import '../../css/r/r0qtzjbqi.css';
import '../../css/b/b2hu6oblg.css';
import '../../css/f/fotikvben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yomuny0gy"/><path class="ddw8yibsz"/><path class="b9krxjjyz"/><path class="xi9didpkb"/><path class="l12ea1bdz"/><path class="g5-8vgb-f"/><path class="r0qtzjbqi"/><path class="b2hu6oblg"/><path class="fotikvben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:snowflake"} {...others} />);
}

export default Component;
