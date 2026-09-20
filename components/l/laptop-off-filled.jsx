import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pxry.css';
import '../../css/v/vpu9cp.css';
import '../../css/z/zxndow.css';
import '../../css/w/wa90th.css';
import '../../css/y/y4wbml.css';
import '../../css/d/dynovx.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-50.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGeDuXcekw"><path class="t5pxry vpu9cp zxndow"/><path class="t5pxry wa90th y4wbml zxndow"/><path class="dynovx oxx-om t5pxry y4wbml"/></mask></defs><path mask="url(#SVGeDuXcekw)" class="botfzx"/><path class="dynovx gd_4-q t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:laptop-off-filled"} {...others} />);
}

export default Component;
