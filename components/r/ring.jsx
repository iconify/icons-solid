import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k4sp1ycwv.css';
import '../../css/o/oftu6aboy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="k4sp1ycwv"/><path class="oftu6aboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ring"} {...others} />);
}

export default Component;
