import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od-kebojv.css';
import '../../css/w/w1usx9wox.css';
import '../../css/o/od4_0bxsi.css';
import '../../css/w/wx3pult5d.css';
import '../../css/r/rb4ewebvj.css';
import '../../css/y/y89a3hbvr.css';
import '../../css/g/g4o-8hbkx.css';
import '../../css/u/u9yh_jb_g.css';
import '../../css/u/uzs1o5buo.css';
import '../../css/v/vi3y68brs.css';
import '../../css/v/vgn8j_1tq.css';
import '../../css/r/r1nr39ark.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="od-kebojv"/><path class="w1usx9wox"/><path class="od4_0bxsi"/><path class="wx3pult5d"/><path class="rb4ewebvj"/><path class="y89a3hbvr"/><path class="g4o-8hbkx"/><path class="u9yh_jb_g"/><path class="uzs1o5buo"/><path class="vi3y68brs"/><path class="vgn8j_1tq"/><path class="r1nr39ark"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:teddy-bear"} {...others} />);
}

export default Component;
