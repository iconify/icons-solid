import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yt85edb5v.css';
import '../../css/y/yw_3-_e3x.css';
import '../../css/x/xp8t89bzn.css';
import '../../css/x/xim4w7bzh.css';
import '../../css/p/pw50wubck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yt85edb5v"/><path class="yw_3-_e3x"/><path class="xp8t89bzn"/><path class="xim4w7bzh"/><path class="pw50wubck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:american-football-helmet"} {...others} />);
}

export default Component;
