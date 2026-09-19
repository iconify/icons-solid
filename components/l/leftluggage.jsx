import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4xf1bb5l.css';
import '../../css/r/r8hexeb-r.css';
import '../../css/h/hdw31irlx.css';
import '../../css/d/de8_fhm8h.css';
import '../../css/v/vi_4uu_xj.css';
import '../../css/s/s0-r01lyq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o4xf1bb5l"/><path class="r8hexeb-r"/><path class="hdw31irlx"/><path class="de8_fhm8h"/><path class="vi_4uu_xj"/><circle class="s0-r01lyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:leftluggage"} {...others} />);
}

export default Component;
