import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7mi3lqpf.css';
import '../../css/n/n5f4dctir.css';
import '../../css/h/hwn9kbc0q.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="m7mi3lqpf"/><path class="n5f4dctir"/><path class="hwn9kbc0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-center"} {...others} />);
}

export default Component;
