import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkaifstuo.css';
import '../../css/a/ag5hxhzxj.css';
import '../../css/z/zjw-bnhpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wkaifstuo"/><path class="ag5hxhzxj"/><path class="zjw-bnhpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:overflow"} {...others} />);
}

export default Component;
