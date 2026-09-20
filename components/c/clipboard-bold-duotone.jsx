import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xam49m99q.css';
import '../../css/m/m49i5dt_c.css';
import '../../css/a/a4r-rlq8w.css';
import '../../css/b/b0uohjbxx.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xam49m99q"/><path class="m49i5dt_c"/><path class="a4r-rlq8w"/><path class="b0uohjbxx"/><path class="c3lyyzb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-bold-duotone"} {...others} />);
}

export default Component;
