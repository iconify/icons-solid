import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/go7a7eb-c.css';
import '../../css/b/b482eebvh.css';
import '../../css/g/g5_p9yb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="go7a7eb-c"/><path class="b482eebvh"/><path class="g5_p9yb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tv-issue"} {...others} />);
}

export default Component;
