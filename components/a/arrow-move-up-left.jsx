import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x36zk0bft.css';
import '../../css/q/qdf7trbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x36zk0bft"/><path class="qdf7trbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-up-left"} {...others} />);
}

export default Component;
