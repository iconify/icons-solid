import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmdl47b5p.css';
import '../../css/c/c41kgs53a.css';
import '../../css/j/jltt4ilue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wmdl47b5p"/><path clip-rule="evenodd" class="c41kgs53a"/><path class="jltt4ilue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:accumulator-duotone"} {...others} />);
}

export default Component;
