import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmrroccsk.css';
import '../../css/n/n3g_7jbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmrroccsk"/><path class="n3g_7jbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:job-search-man-bold"} {...others} />);
}

export default Component;
