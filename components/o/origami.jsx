import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvrlw2b3h.css';
import '../../css/d/dasqow5bx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zvrlw2b3h"/><path class="dasqow5bx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:origami"} {...others} />);
}

export default Component;
