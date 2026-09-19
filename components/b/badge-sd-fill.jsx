import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us0v15b6o.css';
import '../../css/r/rj7231b3s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="us0v15b6o"/><path class="rj7231b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:badge-sd-fill"} {...others} />);
}

export default Component;
