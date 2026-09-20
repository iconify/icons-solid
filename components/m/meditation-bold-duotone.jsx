import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/o/ozfj0mm9h.css';
import '../../css/c/cy5y3eb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v6pzvpfzc"/><path clip-rule="evenodd" class="ozfj0mm9h"/><path class="cy5y3eb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:meditation-bold-duotone"} {...others} />);
}

export default Component;
