import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxsk5z.css';
import '../../css/a/a-_6cg.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-81eu9o.css';
import '../../css/t/tr-143p1f.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGOtnCrdZc"><path class="fxsk5z"/><path class="a-_6cg"/></mask></defs><path mask="url(#SVGOtnCrdZc)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-braces-loop"} {...others} />);
}

export default Component;
