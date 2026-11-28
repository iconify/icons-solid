import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew7pgvbcs.css';
import '../../css/i/i6yti7l8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew7pgvbcs secondary"/><path class="i6yti7l8q primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-left-duo"} {...others} />);
}

export default Component;
