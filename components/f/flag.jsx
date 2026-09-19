import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eczhb8bku.css';
import '../../css/i/ilr5o7bbz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eczhb8bku"/><rect class="ilr5o7bbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flag"} {...others} />);
}

export default Component;
