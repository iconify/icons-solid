import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq6b85b-a.css';
import '../../css/q/qku8lwbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cq6b85b-a"/><path class="qku8lwbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flag-2-bold-duotone"} {...others} />);
}

export default Component;
