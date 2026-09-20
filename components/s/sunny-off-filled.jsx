import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7elsz.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/b/b1gn-q.css';
import '../../css/y/y4wbml.css';
import '../../css/l/l6sy-j.css';
import '../../css/o/oxx-om.css';
import '../../css/p/plzspp.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGTHlVndDi"><path class="j7elsz t5pxry zxndow"/><path class="b1gn-q t5pxry y4wbml zxndow"/><path class="l6sy-j t5pxry y4wbml zxndow"/><path class="oxx-om plzspp t5pxry y4wbml"/></mask></defs><path mask="url(#SVGTHlVndDi)" class="botfzx"/><path class="gd_4-q plzspp t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-off-filled"} {...others} />);
}

export default Component;
