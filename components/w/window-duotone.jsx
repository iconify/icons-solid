import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jc561_1qe.css';
import '../../css/o/oaxi8intw.css';
import '../../css/c/cb_6hfbcx.css';
import '../../css/a/advkribgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jc561_1qe"/><path class="oaxi8intw"/><path class="cb_6hfbcx"/><path class="advkribgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:window-duotone"} {...others} />);
}

export default Component;
