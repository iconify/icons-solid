import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agv0_db3u.css';
import '../../css/s/s_kdtkgoz.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="agv0_db3u"/><path class="s_kdtkgoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bh-4x3"} {...others} />);
}

export default Component;
