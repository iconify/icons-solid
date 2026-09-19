import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osg3mvbzy.css';
import '../../css/f/fcdp3-b9o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="osg3mvbzy"/><path class="fcdp3-b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:apple-eaten"} {...others} />);
}

export default Component;
