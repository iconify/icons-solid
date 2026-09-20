import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pxry.css';
import '../../css/u/u0wwls.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/r/rkazsz.css';
import '../../css/b/botfzx.css';
import '../../css/r/r8o-yv.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-vro9sl.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG1uqrybom"><path class="t5pxry u0wwls zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="rkazsz t5pxry y4wbml"/></mask></defs><path mask="url(#SVG1uqrybom)" class="botfzx"/><path class="r8o-yv t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:download-off-twotone-loop"} {...others} />);
}

export default Component;
