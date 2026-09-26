import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/puolaabmm.css';
import '../../css/f/f03dsgbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="puolaabmm"/><path class="f03dsgbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-from-line-line-duotone"} {...others} />);
}

export default Component;
