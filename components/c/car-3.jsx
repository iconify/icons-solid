import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z54pwwbag.css';
import '../../css/l/lttyhsb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z54pwwbag"/><path class="lttyhsb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-3"} {...others} />);
}

export default Component;
