import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-aj-yb4w.css';
import '../../css/s/svzhbs3no.css';
import '../../css/y/yd9uco5hm.css';
import '../../css/w/w1-qb9b4d.css';
import '../../css/a/a21p_fb_h.css';
import '../../css/u/uroc_2bfr.css';
import '../../css/s/saaf976qo.css';
import '../../css/i/ig1tbbbbu.css';
import '../../css/i/ig9egvbib.css';
import '../../css/h/hit1dxbwd.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="d-aj-yb4w"/><path clip-rule="evenodd" class="svzhbs3no"/><path clip-rule="evenodd" class="yd9uco5hm"/><path clip-rule="evenodd" class="w1-qb9b4d"/><path clip-rule="evenodd" class="a21p_fb_h"/><path clip-rule="evenodd" class="uroc_2bfr"/><path class="saaf976qo"/><path clip-rule="evenodd" class="ig1tbbbbu"/><path clip-rule="evenodd" class="ig9egvbib"/><path clip-rule="evenodd" class="hit1dxbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:confused-nick-young-hand-drawn"} {...others} />);
}

export default Component;
