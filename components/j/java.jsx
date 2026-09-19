import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5o9zrbpr.css';
import '../../css/x/xwbchab1b.css';
import '../../css/i/ij1cq3b5g.css';

const viewBox = {"width":18,"height":24};
const content = `<path class="d5o9zrbpr"/><path class="xwbchab1b"/><path class="ij1cq3b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:java"} {...others} />);
}

export default Component;
