import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jryqur.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/k/kj2bfh.css';
import '../../css/y/y4wbml.css';
import '../../css/o/oeeggn.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG5DGGLcYk"><path class="jryqur t5pxry zxndow"/><path class="kj2bfh t5pxry y4wbml zxndow"/><path class="oeeggn t-ne3j t5pxry y4wbml"/></mask></defs><path mask="url(#SVG5DGGLcYk)" class="botfzx"/><path class="fo5bbb t-ne3j t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:hazard-lights-off-twotone-loop"} {...others} />);
}

export default Component;
