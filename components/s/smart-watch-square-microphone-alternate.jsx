import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eqz6isl7q.css';
import '../../css/t/tjetq60dg.css';
import '../../css/s/soqhypbcv.css';
import '../../css/d/dzcxgfb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eqz6isl7q"/><path class="tjetq60dg"/><path class="soqhypbcv"/><path class="dzcxgfb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-square-microphone-alternate"} {...others} />);
}

export default Component;
