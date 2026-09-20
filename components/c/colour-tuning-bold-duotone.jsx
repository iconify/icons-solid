import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynvhk2btp.css';
import '../../css/k/kjzdoqbce.css';
import '../../css/h/haimesh1v.css';
import '../../css/r/r99dsccbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ynvhk2btp"/><path class="kjzdoqbce"/><path class="haimesh1v"/><path class="r99dsccbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:colour-tuning-bold-duotone"} {...others} />);
}

export default Component;
