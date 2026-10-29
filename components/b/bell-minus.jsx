import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7g1v0bjr.css';
import '../../css/z/z1l4qibot.css';
import '../../css/z/zgqumob9c.css';
import '../../css/o/o-6vy5nee.css';
import '../../css/x/xyagrcwft.css';
import '../../css/m/mo6y85b9g.css';
import '../../css/x/x1vdaxrvx.css';
import '../../css/f/fnoqmybpe.css';
import '../../css/q/qnvuikthw.css';
import '../../css/p/pj6i51byt.css';
import '../../css/t/t_xhc9aid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7g1v0bjr wm-shadow"/><path class="wm-k z1l4qibot"/><path class="wm-k zgqumob9c"/><path class="o-6vy5nee wm-k"/><path class="wm-k xyagrcwft"/><path class="mo6y85b9g wm-k"/><path class="wm-shine x1vdaxrvx"/><path class="fnoqmybpe wm-a"/><path class="qnvuikthw wm-a"/><path class="pj6i51byt wm-s"/><path class="t_xhc9aid wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bell-minus"} {...others} />);
}

export default Component;
