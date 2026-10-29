import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mq0rc7rom.css';
import '../../css/q/qvj2s8b-s.css';
import '../../css/g/g6sgkxg7s.css';
import '../../css/y/yrv0f2bjy.css';
import '../../css/j/jiyp4ybyo.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/c/c_msbbeve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mq0rc7rom wm-k"/><path class="qvj2s8b-s wm-a"/><path class="g6sgkxg7s wm-s"/><path class="wm-shadow yrv0f2bjy"/><path class="jiyp4ybyo wm-k"/><path class="a91ndtnyb wm-k"/><path class="v-dzpkwlt wm-a"/><path class="c_msbbeve wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-x-engrave"} {...others} />);
}

export default Component;
