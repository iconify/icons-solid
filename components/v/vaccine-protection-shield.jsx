import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zswfzlb3o.css';
import '../../css/g/g3064rbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zswfzlb3o"/><path class="g3064rbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-shield"} {...others} />);
}

export default Component;
