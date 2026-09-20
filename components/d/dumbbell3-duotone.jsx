import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-o28mhxw.css';
import '../../css/i/itb9a6-ck.css';
import '../../css/l/l5h1hy93t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e-o28mhxw"/><path class="itb9a6-ck"/><path clip-rule="evenodd" class="l5h1hy93t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dumbbell3-duotone"} {...others} />);
}

export default Component;
