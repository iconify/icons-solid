import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/are-cr.css';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/n/njj14b.css';
import '../../css/z/zq9xpz.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tlvpku.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-k6ve5o.css';
import '../../css/d/d-c-ymvb.css';
import '../../css/d/d-ap4uuv.css';
import '../../css/d/d-yv2e7k.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGwdSguevL"><path class="are-cr g26hbu t5pxry"/><path class="g26hbu njj14b"/><path class="g26hbu zq9xpz"/><path class="oxx-om t5pxry tlvpku"/></mask></defs><path mask="url(#SVGwdSguevL)" class="botfzx"/><path class="gd_4-q t5pxry tlvpku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-high-off-filled"} {...others} />);
}

export default Component;
