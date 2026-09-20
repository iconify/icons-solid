import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4bdibc3k.css';
import '../../css/z/zwk_13b_h.css';
import '../../css/u/udw521wew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4bdibc3k"/><path class="zwk_13b_h"/><path class="udw521wew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:award-ribbon-star-1"} {...others} />);
}

export default Component;
