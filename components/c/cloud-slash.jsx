import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esdsk5kuo.css';
import '../../css/c/c3ire1u8m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="esdsk5kuo"/><path class="c3ire1u8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-slash"} {...others} />);
}

export default Component;
