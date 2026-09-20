import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myvgkfbog.css';
import '../../css/d/dgx730bnu.css';
import '../../css/z/zvgoqqucx.css';
import '../../css/a/a7u84mb6k.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/b/bu4-r-bgk.css';
import '../../css/c/cwgyj6bzc.css';
import '../../css/q/qypzbsbhz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="myvgkfbog"/><path class="dgx730bnu"/><path class="zvgoqqucx"/><path class="a7u84mb6k"/><g class="doj9dq_jg"><path class="bu4-r-bgk"/><path class="cwgyj6bzc"/><path class="qypzbsbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beer-mug"} {...others} />);
}

export default Component;
