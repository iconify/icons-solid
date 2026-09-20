import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrlnzc.css';
import '../../css/y/ycz98z.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/t/tr-143p1f.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGXBl9cdqY"><path class="jrlnzc"/><path class="ycz98z"/></mask></defs><path mask="url(#SVGXBl9cdqY)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-braces"} {...others} />);
}

export default Component;
