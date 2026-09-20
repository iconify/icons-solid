import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyrwudbrm.css';
import '../../css/s/skr2xpekb.css';
import '../../css/j/jmfaeouio.css';
import '../../css/d/dtqrk_8jz.css';
import '../../css/k/k0q_1-biz.css';
import '../../css/g/gn4i_d25j.css';
import '../../css/d/dtj5z6bze.css';
import '../../css/l/l8_3mou6a.css';
import '../../css/v/vlhtmcbxf.css';
import '../../css/y/y_ju4bbla.css';
import '../../css/t/th-91m4yj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oyrwudbrm"/><path class="skr2xpekb"/><path class="jmfaeouio"/><path class="dtqrk_8jz"/><path class="k0q_1-biz"/><path class="gn4i_d25j"/><path class="dtj5z6bze"/><path class="l8_3mou6a"/><path class="vlhtmcbxf"/><path class="y_ju4bbla"/><path class="th-91m4yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:dashing-away"} {...others} />);
}

export default Component;
