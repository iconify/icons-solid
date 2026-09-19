import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4ruhppyy.css';
import '../../css/v/v76ezeb5n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="d4ruhppyy"/><path class="v76ezeb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:printer-fill"} {...others} />);
}

export default Component;
