import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew13tbxvb.css';
import '../../css/a/al19bfb5b.css';
import '../../css/j/jmiuoqhtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew13tbxvb wm-k"/><path class="al19bfb5b wm-a"/><path class="jmiuoqhtu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rss"} {...others} />);
}

export default Component;
