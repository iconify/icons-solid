import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk0_6c3iy.css';
import '../../css/s/syyca7b8i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="uk0_6c3iy"/><path class="syyca7b8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:book"} {...others} />);
}

export default Component;
