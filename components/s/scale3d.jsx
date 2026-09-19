import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nd39lwb3c.css';
import '../../css/z/zy5b82-ar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nd39lwb3c"/><path class="zy5b82-ar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scale3d"} {...others} />);
}

export default Component;
