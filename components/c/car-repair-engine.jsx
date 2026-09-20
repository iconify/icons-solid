import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u0yspl54h.css';
import '../../css/k/k7tssgb7e.css';
import '../../css/s/sukbnfbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u0yspl54h"/><path class="k7tssgb7e"/><path class="sukbnfbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-repair-engine"} {...others} />);
}

export default Component;
