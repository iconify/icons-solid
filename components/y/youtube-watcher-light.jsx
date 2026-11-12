import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5xq98bou.css';
import '../../css/r/r5_089bbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x5xq98bou"/><path class="r5_089bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtube-watcher-light"} {...others} />);
}

export default Component;
