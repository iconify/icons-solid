import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/add57-bjz.css';
import '../../css/g/g3njerbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="add57-bjz secondary"/><path class="g3njerbul primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:map-pin-2-duotone"} {...others} />);
}

export default Component;
