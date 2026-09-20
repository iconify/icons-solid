import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lr62wwxmj.css';
import '../../css/q/qakyn8_8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lr62wwxmj"/><path class="qakyn8_8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mouse-square"} {...others} />);
}

export default Component;
