import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eusm4q.css';
import '../../css/t/t5pxry.css';
import '../../css/v/vxodnn.css';
import '../../css/k/k50i_c.css';
import '../../css/q/qrxbwy.css';
import '../../css/b/botfzx.css';
import '../../css/m/mc-a_v.css';
import '../../css/u/ufposl.css';
import '../../css/k/krj35h.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGLeMJPeiV"><path class="eusm4q t5pxry vxodnn"/><path class="eusm4q k50i_c t5pxry"/><path class="qrxbwy"/></mask></defs><path mask="url(#SVGLeMJPeiV)" class="botfzx"/><path class="mc-a_v t5pxry ufposl"/><path class="krj35h t5pxry ufposl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-plus-twotone"} {...others} />);
}

export default Component;
