import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sh-culjlj.css';
import '../../css/y/ylpjclaro.css';
import '../../css/u/uh28jjz2v.css';
import '../../css/y/yqzzkj6tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="sh-culjlj"/><path class="ylpjclaro"/><path class="uh28jjz2v"/><path class="yqzzkj6tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:web-hook"} {...others} />);
}

export default Component;
