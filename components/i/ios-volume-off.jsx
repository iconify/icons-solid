import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0sww7bvb.css';
import '../../css/n/n25i1etik.css';
import '../../css/b/b6f16cc2l.css';
import '../../css/o/ox_vh_ycg.css';
import '../../css/h/hsl6dub9a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0sww7bvb"/><path class="n25i1etik"/><path class="b6f16cc2l"/><path class="ox_vh_ycg"/><path class="hsl6dub9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-volume-off"} {...others} />);
}

export default Component;
