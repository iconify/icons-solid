import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkp0jirpl.css';
import '../../css/r/rt5mctbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qkp0jirpl"/><path class="rt5mctbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-man"} {...others} />);
}

export default Component;
