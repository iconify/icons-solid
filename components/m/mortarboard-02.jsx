import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j69z1bvmp.css';
import '../../css/m/m44gjsb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j69z1bvmp"/><path class="m44gjsb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mortarboard-02"} {...others} />);
}

export default Component;
