import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1u6ybcci.css';
import '../../css/u/ufqvjm-rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1u6ybcci"/><path class="ufqvjm-rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-plus"} {...others} />);
}

export default Component;
