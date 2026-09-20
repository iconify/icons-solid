import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ch-rxbbzt.css';
import '../../css/f/fg4s8lnfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ch-rxbbzt"/><path class="fg4s8lnfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-linear"} {...others} />);
}

export default Component;
