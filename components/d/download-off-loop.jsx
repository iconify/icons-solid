import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed-7kp.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/j/j-gigb.css';
import '../../css/b/botfzx.css';
import '../../css/r/rgeonx.css';
import '../../css/d/d-vro9sl.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGWqrFWbyg"><path class="ed-7kp t5pxry zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="j-gigb t5pxry y4wbml"/></mask></defs><path mask="url(#SVGWqrFWbyg)" class="botfzx"/><path class="rgeonx t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:download-off-loop"} {...others} />);
}

export default Component;
