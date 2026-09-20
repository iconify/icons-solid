import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/ry115bbfy.css';
import '../../css/v/vt2zlobnj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ry115bbfy"/><path class="vt2zlobnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:man-arm-raises-2-alternate"} {...others} />);
}

export default Component;
