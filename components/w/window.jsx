import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a940_6bhy.css';
import '../../css/v/v8w97cb7r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="a940_6bhy"/><path class="v8w97cb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:window"} {...others} />);
}

export default Component;
