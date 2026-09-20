import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb2wkrbqz.css';
import '../../css/v/v70sv_b8n.css';
import '../../css/c/c41kgs53a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eb2wkrbqz"/><path class="v70sv_b8n"/><path clip-rule="evenodd" class="c41kgs53a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:accumulator-filled"} {...others} />);
}

export default Component;
