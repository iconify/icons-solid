import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pxry.css';
import '../../css/v/vz72ed.css';
import '../../css/z/zxndow.css';
import '../../css/l/l6j71m.css';
import '../../css/y/y4wbml.css';
import '../../css/a/atdllv.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGHfjvHcGl"><path class="t5pxry vz72ed zxndow"/><path class="l6j71m t5pxry y4wbml zxndow"/><path class="atdllv oxx-om t5pxry y4wbml"/></mask></defs><path mask="url(#SVGHfjvHcGl)" class="botfzx"/><path class="atdllv gd_4-q t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:folder-off-filled"} {...others} />);
}

export default Component;
