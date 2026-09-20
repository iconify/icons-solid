import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqyo9vbbc.css';
import '../../css/z/zmw5qvb9w.css';
import '../../css/c/czr0hc_1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tqyo9vbbc"/><path clip-rule="evenodd" class="zmw5qvb9w"/><path class="czr0hc_1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tuning3"} {...others} />);
}

export default Component;
