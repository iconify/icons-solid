import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t0t95pb5p.css';
import '../../css/m/mq6v6i0ap.css';
import '../../css/d/d4xbrboxz.css';
import '../../css/y/yjmve3b-b.css';
import '../../css/s/s3zpgmbwe.css';
import '../../css/b/bf-k1zcyc.css';
import '../../css/w/w5p7x9b8b.css';
import '../../css/b/b01cb-ffp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="t0t95pb5p wm-shadow"/><path class="mq6v6i0ap"/><path class="d4xbrboxz"/><path class="yjmve3b-b"/><path class="s3zpgmbwe"/><path class="bf-k1zcyc"/><path class="w5p7x9b8b"/><path class="b01cb-ffp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chinese-knot"} {...others} />);
}

export default Component;
