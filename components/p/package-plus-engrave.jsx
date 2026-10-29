import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq0rc7rom.css';
import '../../css/q/qvj2s8b-s.css';
import '../../css/p/pzemj-bhd.css';
import '../../css/l/lmqqh7b0t.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/s/szzmfoboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mq0rc7rom wm-k"/><path class="qvj2s8b-s wm-a"/><path class="pzemj-bhd wm-s"/><path class="lmqqh7b0t wm-shadow"/><path class="jiyp4ybyo wm-k"/><path class="a91ndtnyb wm-k"/><path class="v-dzpkwlt wm-a"/><path class="szzmfoboo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-plus-engrave"} {...others} />);
}

export default Component;
