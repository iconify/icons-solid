import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fu2ooubtt.css';
import '../../css/m/m0sh7ccsz.css';
import '../../css/u/uvqytmbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fu2ooubtt"/><path class="m0sh7ccsz"/><path class="uvqytmbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-left-bold-duotone"} {...others} />);
}

export default Component;
