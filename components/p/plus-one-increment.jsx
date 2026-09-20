import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2_88k4dz.css';
import '../../css/o/oy8gbbbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h2_88k4dz"/><path class="oy8gbbbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:plus-one-increment"} {...others} />);
}

export default Component;
