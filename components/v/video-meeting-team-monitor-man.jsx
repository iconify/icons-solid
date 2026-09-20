import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju8rpyy-e.css';
import '../../css/e/e7xj5wb7j.css';
import '../../css/v/vqybd9jdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju8rpyy-e"/><path class="e7xj5wb7j"/><path class="vqybd9jdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-meeting-team-monitor-man"} {...others} />);
}

export default Component;
