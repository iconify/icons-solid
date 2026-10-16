import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/htpjnobzt.css';
import '../../css/h/h77z6nbit.css';
import '../../css/b/bj4jdh-3b.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="htpjnobzt"/><path class="h77z6nbit"/><path class="bj4jdh-3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bf-4x3"} {...others} />);
}

export default Component;
