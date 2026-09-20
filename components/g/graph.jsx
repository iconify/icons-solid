import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m-37c3brq.css';
import '../../css/f/f849ne16n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m-37c3brq"/><path class="f849ne16n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:graph"} {...others} />);
}

export default Component;
