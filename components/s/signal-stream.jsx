import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tobmkjx4s.css';
import '../../css/b/bb602ybpl.css';
import '../../css/o/o-ezxobzr.css';
import '../../css/o/oc5c_p17s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tobmkjx4s"/><path clip-rule="evenodd" class="bb602ybpl"/><path class="o-ezxobzr"/><path class="oc5c_p17s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:signal-stream"} {...others} />);
}

export default Component;
