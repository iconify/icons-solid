import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfw4eis5o.css';
import '../../css/l/luwbe3bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nfw4eis5o"/><path class="luwbe3bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-autofit-left-filled"} {...others} />);
}

export default Component;
