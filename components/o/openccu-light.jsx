import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0bw_ob_p.css';
import '../../css/z/zpq41munm.css';
import '../../css/e/emcgj_4vj.css';
import '../../css/i/i6hs1vb_n.css';
import '../../css/a/a2iogjbys.css';
import '../../css/u/uju8fpbvz.css';
import '../../css/h/hsxpgtbmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0bw_ob_p"/><path class="zpq41munm"/><path class="emcgj_4vj"/><path class="i6hs1vb_n"/><path class="a2iogjbys"/><path class="uju8fpbvz"/><path class="hsxpgtbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openccu-light"} {...others} />);
}

export default Component;
