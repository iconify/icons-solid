import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l31218bhz.css';
import '../../css/f/fa4l9cepg.css';
import '../../css/j/jyoq52b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l31218bhz"/><path class="fa4l9cepg"/><path class="jyoq52b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:boxes"} {...others} />);
}

export default Component;
