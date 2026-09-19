import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbr1fpbxs.css';
import '../../css/u/u5wuxiadc.css';
import '../../css/t/t_4e8hb_x.css';
import '../../css/j/jdpmspbsm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xbr1fpbxs"/><path class="u5wuxiadc"/><path class="t_4e8hb_x"/><path class="jdpmspbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:envoy-wordmark"} {...others} />);
}

export default Component;
