import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz8ra2brm.css';
import '../../css/v/vik802c-d.css';
import '../../css/q/q_s83rbme.css';
import '../../css/b/b4odd7b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rz8ra2brm"/><path class="vik802c-d"/><path class="q_s83rbme"/><path class="b4odd7b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-bold-duotone"} {...others} />);
}

export default Component;
