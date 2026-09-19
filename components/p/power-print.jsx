import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h12mmx6jh.css';
import '../../css/u/u4l8uj5fs.css';
import '../../css/h/hg6hx7b4o.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="h12mmx6jh"/><path class="u4l8uj5fs"/><path class="hg6hx7b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:power-print"} {...others} />);
}

export default Component;
