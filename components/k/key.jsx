import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9qndsbpw.css';
import '../../css/f/fbierd1oq.css';
import '../../css/k/kjk6edcka.css';
import '../../css/h/hf7ix_z3e.css';
import '../../css/y/ytuhe__1v.css';
import '../../css/m/my9q17bot.css';
import '../../css/r/rhvsc9pfz.css';
import '../../css/e/era37bv8l.css';
import '../../css/v/v77pnolgt.css';
import '../../css/g/g5j7iccep.css';
import '../../css/m/mq2-s_b9l.css';
import '../../css/b/biztwjb2l.css';
import '../../css/e/e03f13b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u9qndsbpw wm-shadow"/><path class="fbierd1oq"/><path class="kjk6edcka"/><path class="hf7ix_z3e"/><path class="ytuhe__1v"/><path class="my9q17bot"/><path class="rhvsc9pfz"/><path class="era37bv8l"/><path class="v77pnolgt"/><path class="g5j7iccep wm-shine"/><path class="mq2-s_b9l wm-shine"/><path class="biztwjb2l"/><path class="e03f13b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:key"} {...others} />);
}

export default Component;
