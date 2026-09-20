import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9y5sy.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/t/tp2lab.css';
import '../../css/u/uouk4x.css';
import '../../css/b/botfzx.css';
import '../../css/e/e3-och.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGD3WnNdzF"><path class="j9y5sy t5pxry zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="t5pxry tp2lab uouk4x y4wbml"/></mask></defs><path mask="url(#SVGD3WnNdzF)" class="botfzx"/><path class="e3-och t5pxry tp2lab y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:upload-off"} {...others} />);
}

export default Component;
