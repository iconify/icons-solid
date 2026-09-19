import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skp0jcbyo.css';
import '../../css/m/mj4w1gb3h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="skp0jcbyo"/><path class="mj4w1gb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:fan"} {...others} />);
}

export default Component;
