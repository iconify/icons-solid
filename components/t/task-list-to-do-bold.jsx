import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-uvrnlra.css';
import '../../css/b/b81tpq8nq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-uvrnlra"/><path class="b81tpq8nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-list-to-do-bold"} {...others} />);
}

export default Component;
