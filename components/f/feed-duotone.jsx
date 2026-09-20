import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7r425_gi.css';
import '../../css/q/qgbgttb3i.css';
import '../../css/g/gtes6eb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7r425_gi"/><path class="qgbgttb3i"/><path class="gtes6eb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:feed-duotone"} {...others} />);
}

export default Component;
