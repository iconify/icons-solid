import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j425y2b-h.css';
import '../../css/y/y6hr7bcjz.css';
import '../../css/t/tg4es0buh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j425y2b-h"/><path class="y6hr7bcjz"/><path class="tg4es0buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:carnival-shop"} {...others} />);
}

export default Component;
