import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh9yt4b_y.css';
import '../../css/u/uezeccc_d.css';
import '../../css/u/uyina-bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh9yt4b_y wm-a"/><path class="uezeccc_d wm-k"/><path class="uyina-bcq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:layers"} {...others} />);
}

export default Component;
