import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fw1czwhuf.css';
import '../../css/n/n5jzvt_cc.css';
import '../../css/r/rcw2tkb_u.css';
import '../../css/h/hqr21nr6g.css';
import '../../css/y/yt5it6h1a.css';
import '../../css/j/jvevb2ask.css';
import '../../css/g/gz3kls-hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fw1czwhuf wm-shadow"/><path class="n5jzvt_cc"/><path class="rcw2tkb_u"/><path class="hqr21nr6g"/><path class="yt5it6h1a"/><path class="jvevb2ask wm-shine"/><path class="gz3kls-hq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ice-cream"} {...others} />);
}

export default Component;
