import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5bv9rbda.css';
import '../../css/p/pt1kf0bik.css';
import '../../css/c/cdt14qbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u5bv9rbda"/><path class="pt1kf0bik"/><path class="cdt14qbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fridge-duotone"} {...others} />);
}

export default Component;
