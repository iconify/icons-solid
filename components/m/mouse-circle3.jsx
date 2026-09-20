import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qakyn8_8n.css';
import '../../css/j/jsy9-fwnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qakyn8_8n"/><path class="jsy9-fwnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mouse-circle3"} {...others} />);
}

export default Component;
