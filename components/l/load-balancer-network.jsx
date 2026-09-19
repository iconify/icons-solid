import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs6osbb0q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zs6osbb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:load-balancer-network"} {...others} />);
}

export default Component;
