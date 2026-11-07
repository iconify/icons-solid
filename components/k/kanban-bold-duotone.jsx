import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0m-gp8wq.css';
import '../../css/n/nllo96y1n.css';
import '../../css/r/ro4pfvbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0m-gp8wq"/><path class="nllo96y1n"/><path class="ro4pfvbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-bold-duotone"} {...others} />);
}

export default Component;
