import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmws3517e.css';
import '../../css/e/eyx6sqoxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nmws3517e"/><path class="eyx6sqoxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:messages-filled"} {...others} />);
}

export default Component;
