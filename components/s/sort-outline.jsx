import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkkvlhj7f.css';
import '../../css/p/pq35h-0il.css';
import '../../css/q/qq69lrb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vkkvlhj7f"/><path class="pq35h-0il"/><path class="qq69lrb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-outline"} {...others} />);
}

export default Component;
