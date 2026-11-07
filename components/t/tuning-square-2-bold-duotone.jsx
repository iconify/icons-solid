import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbl5tccaq.css';
import '../../css/d/diir2xbcn.css';
import '../../css/j/j-gznccqg.css';
import '../../css/z/zepddnbmb.css';
import '../../css/c/cs9i8xbnw.css';
import '../../css/g/g0ldhibge.css';
import '../../css/m/mpawiibxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbl5tccaq"/><path class="diir2xbcn"/><path class="j-gznccqg"/><path class="zepddnbmb"/><path class="cs9i8xbnw"/><path clip-rule="evenodd" class="g0ldhibge"/><path clip-rule="evenodd" class="mpawiibxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-bold-duotone"} {...others} />);
}

export default Component;
