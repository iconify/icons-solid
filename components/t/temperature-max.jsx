import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc9-iebck.css';
import '../../css/w/w2x3wnbjj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fc9-iebck"/><path class="w2x3wnbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-max"} {...others} />);
}

export default Component;
