import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dke-r9hkj.css';
import '../../css/g/g4uydkbpi.css';
import '../../css/x/xl8j_acnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dke-r9hkj"/><path class="g4uydkbpi"/><path clip-rule="evenodd" class="xl8j_acnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stars4-duotone"} {...others} />);
}

export default Component;
