import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of684nb-q.css';
import '../../css/o/ojsa_8byv.css';
import '../../css/x/x828zuwsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="of684nb-q"/><path class="ojsa_8byv"/><path class="x828zuwsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-bold-duotone"} {...others} />);
}

export default Component;
