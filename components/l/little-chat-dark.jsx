import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9-4b0rca.css';
import '../../css/l/lrv75jbqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b9-4b0rca"/><path class="lrv75jbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:little-chat-dark"} {...others} />);
}

export default Component;
