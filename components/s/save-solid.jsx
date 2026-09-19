import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdiyfl2-s.css';
import '../../css/d/d_sq5jfqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdiyfl2-s"/><path class="d_sq5jfqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:save-solid"} {...others} />);
}

export default Component;
