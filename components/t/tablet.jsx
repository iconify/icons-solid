import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktad9rv_f.css';
import '../../css/h/hxuze3boh.css';
import '../../css/d/ddwq8rb0d.css';

const viewBox = {"width":25,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ktad9rv_f"/><path class="hxuze3boh"/><circle class="ddwq8rb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:tablet"} {...others} />);
}

export default Component;
