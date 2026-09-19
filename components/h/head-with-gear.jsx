import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj9ie88vs.css';
import '../../css/g/gupue5bti.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="nj9ie88vs"/><path class="gupue5bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:head-with-gear"} {...others} />);
}

export default Component;
