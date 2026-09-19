import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tghaxetbg.css';
import '../../css/f/fxkb1gbjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tghaxetbg"/><path class="fxkb1gbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:graphic-design"} {...others} />);
}

export default Component;
