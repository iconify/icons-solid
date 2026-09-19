import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1qx2ccef.css';
import '../../css/n/n47tp7b2n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="o1qx2ccef"/><path class="n47tp7b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-bounding-box"} {...others} />);
}

export default Component;
