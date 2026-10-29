import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq0rc7rom.css';
import '../../css/q/qvj2s8b-s.css';
import '../../css/z/zzl9b5n1t.css';
import '../../css/t/tpt-ohrro.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/b/b9j7mod-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mq0rc7rom wm-k"/><path class="qvj2s8b-s wm-a"/><path class="wm-s zzl9b5n1t"/><path class="tpt-ohrro wm-shadow"/><path class="jiyp4ybyo wm-k"/><path class="a91ndtnyb wm-k"/><path class="v-dzpkwlt wm-a"/><path class="b9j7mod-z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-check-engrave"} {...others} />);
}

export default Component;
