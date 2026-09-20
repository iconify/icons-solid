import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm2goy.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/d/dxl7-q.css';
import '../../css/y/y4wbml.css';
import '../../css/r/ruuz6o.css';
import '../../css/k/kivm5z.css';
import '../../css/o/oxx-om.css';
import '../../css/z/zr3haz.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGYAmtrD8v"><path class="rm2goy t5pxry zxndow"/><path class="dxl7-q t5pxry y4wbml zxndow"/><path class="ruuz6o t5pxry y4wbml zxndow"/><path class="kivm5z t5pxry y4wbml zxndow"/><path class="oxx-om t5pxry y4wbml zr3haz"/></mask></defs><path mask="url(#SVGYAmtrD8v)" class="botfzx"/><path class="gd_4-q t5pxry y4wbml zr3haz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-twotone-off"} {...others} />);
}

export default Component;
