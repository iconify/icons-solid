import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmjg18bho.css';
import '../../css/t/trpixhn4n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="tmjg18bho"/><path class="trpixhn4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:book-open"} {...others} />);
}

export default Component;
