import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yuwn19gtc.css';
import '../../css/s/sf0ajkf7l.css';
import '../../css/x/xqs6jubse.css';
import '../../css/v/vgk_wb_7i.css';
import '../../css/h/hrqx-d51g.css';
import '../../css/h/hxqa76b9q.css';
import '../../css/o/ol0i3j21a.css';
import '../../css/x/x4vt-dgcn.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yuwn19gtc"/><path class="sf0ajkf7l"/><path class="xqs6jubse"/><path class="vgk_wb_7i"/><path class="hrqx-d51g"/><path class="hxqa76b9q"/><path class="ol0i3j21a wm-shine"/><path class="wm-deco x4vt-dgcn"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:candy-corn"} {...others} />);
}

export default Component;
