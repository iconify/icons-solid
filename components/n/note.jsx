import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oith-jmfo.css';
import '../../css/k/kl42awulg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oith-jmfo"/><path class="kl42awulg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:note"} {...others} />);
}

export default Component;
