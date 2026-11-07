import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdvbgrb8q.css';
import '../../css/c/cq7nq2bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdvbgrb8q"/><path class="cq7nq2bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-3-bold-duotone"} {...others} />);
}

export default Component;
