import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epdkc8bhh.css';
import '../../css/y/y44aequ3q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="epdkc8bhh"/><path class="y44aequ3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:backpack4-fill"} {...others} />);
}

export default Component;
