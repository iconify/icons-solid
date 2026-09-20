import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_ke4c.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ip662n.css';
import '../../css/y/y4wbml.css';
import '../../css/h/hurhap.css';
import '../../css/b/botfzx.css';
import '../../css/k/kbuaor.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-2dk93e.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGA7ZW3daQ"><path class="r_ke4c t5pxry zxndow"/><path class="ip662n t5pxry y4wbml zxndow"/><path class="hurhap t5pxry y4wbml"/></mask></defs><path mask="url(#SVGA7ZW3daQ)" class="botfzx"/><path class="kbuaor t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:lightbulb-off-twotone-loop"} {...others} />);
}

export default Component;
