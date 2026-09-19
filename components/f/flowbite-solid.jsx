import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vtgt2unvj.css';
import '../../css/j/jdcazrb0o.css';
import '../../css/x/xn93meeml.css';
import '../../css/u/uz5fs9kha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vtgt2unvj"/><path class="jdcazrb0o"/><path class="xn93meeml"/><path class="uz5fs9kha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:flowbite-solid"} {...others} />);
}

export default Component;
