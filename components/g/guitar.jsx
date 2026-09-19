import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl3de0cko.css';
import '../../css/a/ayo-76b_t.css';
import '../../css/b/bswzncbox.css';
import '../../css/v/vs0cgob1u.css';
import '../../css/u/ut6993c_l.css';
import '../../css/v/vaz8dablx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dl3de0cko"/><path class="ayo-76b_t"/><path class="bswzncbox"/><path class="vs0cgob1u"/><path class="ut6993c_l"/><path class="vaz8dablx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:guitar"} {...others} />);
}

export default Component;
