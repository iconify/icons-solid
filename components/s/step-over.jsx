import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cp-xsdtlp.css';
import '../../css/g/gg4q_rxvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cp-xsdtlp"/><path class="gg4q_rxvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:step-over"} {...others} />);
}

export default Component;
