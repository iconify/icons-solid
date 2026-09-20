import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib50uz.css';
import '../../css/t/t5pxry.css';
import '../../css/e/ecw59c.css';
import '../../css/y/y4wbml.css';
import '../../css/b/botfzx.css';
import '../../css/l/lq_9ci.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-jqytza.css';
import '../../css/d/d-qnzcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGb848GPRy"><path class="ib50uz t5pxry"/><path class="ecw59c t5pxry y4wbml"/></mask></defs><path mask="url(#SVGb848GPRy)" class="botfzx"/><path class="lq_9ci t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-off-twotone-loop"} {...others} />);
}

export default Component;
