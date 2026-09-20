import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jpo7_pb2a.css';
import '../../css/l/l62d9fwog.css';
import '../../css/b/bz0iknbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jpo7_pb2a"/><path class="l62d9fwog"/><path class="bz0iknbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-linear"} {...others} />);
}

export default Component;
