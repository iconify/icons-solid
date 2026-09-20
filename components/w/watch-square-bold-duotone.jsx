import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1jdzlbau.css';
import '../../css/n/n0fkizyoa.css';
import '../../css/z/zudf230vb.css';
import '../../css/f/fqtfdwbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n1jdzlbau"/><path class="n0fkizyoa"/><path class="zudf230vb"/><path class="fqtfdwbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-bold-duotone"} {...others} />);
}

export default Component;
