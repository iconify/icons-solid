import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy6hdmbvr.css';
import '../../css/q/qfu31qb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy6hdmbvr"/><path class="qfu31qb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:scissors-3-line"} {...others} />);
}

export default Component;
