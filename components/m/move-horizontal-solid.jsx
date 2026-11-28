import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3w5q6brq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3w5q6brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:move-horizontal-solid"} {...others} />);
}

export default Component;
