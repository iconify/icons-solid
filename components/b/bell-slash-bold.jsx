import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn4gztbqd.css';
import '../../css/h/h4kc3ebpj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="vn4gztbqd"/><path class="h4kc3ebpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-slash-bold"} {...others} />);
}

export default Component;
