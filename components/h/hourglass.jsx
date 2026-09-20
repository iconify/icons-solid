import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/ca65x6bgd.css';
import '../../css/g/g9qrbsbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ca65x6bgd"/><path class="g9qrbsbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:hourglass"} {...others} />);
}

export default Component;
