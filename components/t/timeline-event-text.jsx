import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wljsz2b4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wljsz2b4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:timeline-event-text"} {...others} />);
}

export default Component;
