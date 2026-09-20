import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e33bsjk-z.css';
import '../../css/w/w9f5wmlsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e33bsjk-z"/><path class="w9f5wmlsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-specialty-knee-1"} {...others} />);
}

export default Component;
