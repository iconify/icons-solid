import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bnh9hhzoo.css';
import '../../css/f/fs7iv_b1t.css';
import '../../css/y/y2_zxhb3j.css';
import '../../css/o/odtc3mbcd.css';
import '../../css/k/kymgtgows.css';
import '../../css/q/qcvjowbjy.css';
import '../../css/g/gqyoug8fo.css';
import '../../css/x/xbxt6dblc.css';
import '../../css/q/qzbtjqztv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bnh9hhzoo wm-shadow"/><path class="fs7iv_b1t"/><path class="y2_zxhb3j"/><path class="odtc3mbcd"/><path class="kymgtgows"/><path class="qcvjowbjy"/><path class="gqyoug8fo"/><path class="wm-shine xbxt6dblc"/><path class="qzbtjqztv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:taxi"} {...others} />);
}

export default Component;
