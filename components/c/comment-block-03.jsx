import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3bsjobvh.css';
import '../../css/f/fqcplabwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w3bsjobvh"/><path class="fqcplabwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comment-block-03"} {...others} />);
}

export default Component;
