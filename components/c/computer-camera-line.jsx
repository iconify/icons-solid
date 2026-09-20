import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pn2ogq_7k.css';
import '../../css/u/uzjbj8bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="pn2ogq_7k"/><path class="uzjbj8bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:computer-camera-line"} {...others} />);
}

export default Component;
