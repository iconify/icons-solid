import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hkq_mabjt.css';
import '../../css/v/v8hyl3trp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hkq_mabjt"/><path class="v8hyl3trp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:box-drag"} {...others} />);
}

export default Component;
