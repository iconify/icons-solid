import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-6g3wbzx.css';
import '../../css/a/abiebpbyt.css';
import '../../css/y/y58aqnbeg.css';
import '../../css/v/vyhbjpb_i.css';
import '../../css/t/tcck39b_a.css';
import '../../css/q/qp8a11yko.css';
import '../../css/t/tr3qzm4kk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v-6g3wbzx"/><path class="abiebpbyt"/><path class="y58aqnbeg"/><path class="vyhbjpb_i"/><path class="tcck39b_a"/><path class="qp8a11yko"/><path class="tr3qzm4kk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mountaincableway"} {...others} />);
}

export default Component;
