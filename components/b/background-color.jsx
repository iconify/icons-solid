import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wuyn7d7jn.css';
import '../../css/a/a_3rfj7ih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wuyn7d7jn"/><path class="a_3rfj7ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:background-color"} {...others} />);
}

export default Component;
