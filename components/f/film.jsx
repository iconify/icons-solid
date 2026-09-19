import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuxx9b2_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kuxx9b2_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:film"} {...others} />);
}

export default Component;
