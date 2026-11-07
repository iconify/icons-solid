import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikxnezhma.css';
import '../../css/a/ao3xg6lae.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ikxnezhma"/><path class="ao3xg6lae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-bold-duotone"} {...others} />);
}

export default Component;
