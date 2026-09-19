import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nyl59rfbs.css';
import '../../css/p/pp-hmcb4o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><circle class="nyl59rfbs"/><path class="pp-hmcb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:dice-1"} {...others} />);
}

export default Component;
