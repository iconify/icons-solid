import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3j053bgs.css';
import '../../css/r/r7saflb4q.css';
import '../../css/l/lswxvsb7a.css';
import '../../css/t/th2z_qbpy.css';
import '../../css/l/l8zt1bbjr.css';
import '../../css/n/nm2tg8tvk.css';
import '../../css/x/xd9nvvbmb.css';
import '../../css/j/jmg2djbes.css';
import '../../css/w/wodcb4b4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w3j053bgs"/><path class="r7saflb4q"/><path class="lswxvsb7a"/><path class="th2z_qbpy"/><path class="l8zt1bbjr"/><path class="nm2tg8tvk"/><path class="xd9nvvbmb"/><path class="jmg2djbes"/><path class="wodcb4b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redis"} {...others} />);
}

export default Component;
