import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sovy61-7k.css';
import '../../css/j/js5r8hjtc.css';
import '../../css/h/hvqpucqhf.css';
import '../../css/i/i_fevuidw.css';
import '../../css/i/i47ie_bvz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><ellipse class="sovy61-7k"/><path clip-rule="evenodd" class="js5r8hjtc"/><path clip-rule="evenodd" class="hvqpucqhf"/><path clip-rule="evenodd" class="i_fevuidw"/><path clip-rule="evenodd" class="i47ie_bvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tornado-bold"} {...others} />);
}

export default Component;
