import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2ciy8b3b.css';
import '../../css/s/sq6m7tu0z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="t2ciy8b3b"/><path class="sq6m7tu0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:mailbox"} {...others} />);
}

export default Component;
