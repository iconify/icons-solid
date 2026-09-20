import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pz3p__bod.css';
import '../../css/b/byd05hb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pz3p__bod"/><path class="byd05hb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:world-cross"} {...others} />);
}

export default Component;
