import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5zq6fb5o.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="i5zq6fb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:vector-nodes-6"} {...others} />);
}

export default Component;
