import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhrxheaqf.css';
import '../../css/p/pq_3tfnsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lhrxheaqf"/><path clip-rule="evenodd" class="pq_3tfnsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:image-outline"} {...others} />);
}

export default Component;
