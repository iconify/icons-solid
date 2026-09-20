import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuzxbl.css';
import '../../css/t/t5pxry.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/c/cih9ai.css';
import '../../css/c/ccv_gr.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-8.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG3RkFjePu"><path class="fuzxbl t5pxry y4wbml zxndow"/><path class="cih9ai t5pxry zxndow"/><path class="ccv_gr oxx-om t5pxry y4wbml"/></mask></defs><path mask="url(#SVG3RkFjePu)" class="botfzx"/><path class="ccv_gr gd_4-q t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:computer-off-twotone"} {...others} />);
}

export default Component;
