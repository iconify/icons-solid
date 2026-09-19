import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1y845b1h.css';
import '../../css/j/j-791ibyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g1y845b1h"/><path class="j-791ibyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:repeat-one-01"} {...others} />);
}

export default Component;
