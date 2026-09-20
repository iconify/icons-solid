import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7elsz.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/b/brd35s.css';
import '../../css/y/y4wbml.css';
import '../../css/y/y2t12w.css';
import '../../css/n/nxhknx.css';
import '../../css/b/botfzx.css';
import '../../css/v/v0nq6m.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-jqytza.css';
import '../../css/d/d-qnzcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGMu5dX1HN"><path class="j7elsz t5pxry zxndow"/><path class="brd35s t5pxry y4wbml zxndow"/><path class="t5pxry y2t12w y4wbml zxndow"/><path class="nxhknx t5pxry y4wbml"/></mask></defs><path mask="url(#SVGMu5dX1HN)" class="botfzx"/><path class="t5pxry v0nq6m y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-off-filled-loop"} {...others} />);
}

export default Component;
