import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dk6attbxk.css';
import '../../css/k/kbl3vi1qd.css';
import '../../css/b/bv7s2dbhv.css';
import '../../css/b/b20j0mbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dk6attbxk"/><path class="kbl3vi1qd wm-a"/><path class="bv7s2dbhv wm-k"/><path class="b20j0mbzp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-sketch"} {...others} />);
}

export default Component;
