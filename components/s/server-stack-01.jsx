import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6tur-iog.css';
import '../../css/f/f7su19blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w6tur-iog"/><path class="f7su19blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:server-stack-01"} {...others} />);
}

export default Component;
