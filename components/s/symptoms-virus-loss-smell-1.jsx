import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hjfawzbxx.css';
import '../../css/h/h4jpboadv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hjfawzbxx"/><path class="h4jpboadv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:symptoms-virus-loss-smell-1"} {...others} />);
}

export default Component;
