import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a18j-42hq.css';
import '../../css/o/ocaql2bvf.css';
import '../../css/g/g97o7wb6l.css';
import '../../css/o/o25ybpb8p.css';
import '../../css/m/mt89vkbvt.css';
import '../../css/y/yo87sjout.css';
import '../../css/a/agsdgrbse.css';
import '../../css/m/ml7gaebsz.css';
import '../../css/s/svjstevdl.css';
import '../../css/i/il6spjbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a18j-42hq wm-k"/><path class="ocaql2bvf wm-deco"/><path class="g97o7wb6l wm-k"/><path class="o25ybpb8p wm-shadow"/><path class="mt89vkbvt wm-shine"/><path class="wm-shine yo87sjout"/><path class="agsdgrbse wm-a"/><path class="ml7gaebsz wm-a"/><path class="svjstevdl wm-a"/><path class="il6spjbyo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:croissant"} {...others} />);
}

export default Component;
