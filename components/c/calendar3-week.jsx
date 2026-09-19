import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d18ho_bvk.css';
import '../../css/z/zsgsk2b9u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="d18ho_bvk"/><path class="zsgsk2b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar3-week"} {...others} />);
}

export default Component;
