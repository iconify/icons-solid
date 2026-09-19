import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_pkmobha.css';
import '../../css/o/onkfr279v.css';
import '../../css/k/ksf38acky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c_pkmobha"/><path clip-rule="evenodd" class="onkfr279v"/><path class="ksf38acky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chills-outline-24px"} {...others} />);
}

export default Component;
