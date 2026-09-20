import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yqjipifpm.css';
import '../../css/b/bmpvgbieq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yqjipifpm"/><path class="bmpvgbieq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:number-five-square"} {...others} />);
}

export default Component;
