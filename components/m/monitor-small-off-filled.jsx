import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g26hbu.css';
import '../../css/q/qmmxlo.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ik5ydf.css';
import '../../css/a/ay17qu.css';
import '../../css/y/y4wbml.css';
import '../../css/o/oxx-om.css';
import '../../css/p/p9atcd.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfePXLeVg"><path class="g26hbu qmmxlo t5pxry zxndow"/><path class="g26hbu ik5ydf"/><path class="ay17qu t5pxry y4wbml zxndow"/><path class="oxx-om p9atcd t5pxry y4wbml"/></mask></defs><path mask="url(#SVGfePXLeVg)" class="botfzx"/><path class="gd_4-q p9atcd t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:monitor-small-off-filled"} {...others} />);
}

export default Component;
