import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3goysbmy.css';
import '../../css/g/g50np5bge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h3goysbmy"/><path class="g50np5bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:screen"} {...others} />);
}

export default Component;
