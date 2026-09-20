import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/satd7upkb.css';
import '../../css/w/wy2n5sbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="satd7upkb"/><path class="wy2n5sbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tablet"} {...others} />);
}

export default Component;
