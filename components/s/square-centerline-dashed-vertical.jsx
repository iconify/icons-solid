import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk_t0xb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zk_t0xb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-centerline-dashed-vertical"} {...others} />);
}

export default Component;
