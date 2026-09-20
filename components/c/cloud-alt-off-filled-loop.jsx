import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndg0sd.css';
import '../../css/t/t5pxry.css';
import '../../css/a/a_32hx.css';
import '../../css/y/y4wbml.css';
import '../../css/b/botfzx.css';
import '../../css/k/kcot1u.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-jqytza.css';
import '../../css/d/d-qnzcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfM00nd1a"><path class="ndg0sd t5pxry"/><path class="a_32hx t5pxry y4wbml"/></mask></defs><path mask="url(#SVGfM00nd1a)" class="botfzx"/><path class="kcot1u t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-off-filled-loop"} {...others} />);
}

export default Component;
