import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rps0jex0n.css';
import '../../css/u/usm9v7bnk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="rps0jex0n"/><path class="usm9v7bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:notepad"} {...others} />);
}

export default Component;
