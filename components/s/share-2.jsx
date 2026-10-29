import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfhoe4bhy.css';
import '../../css/y/yqw270b7k.css';
import '../../css/f/fj3nl9b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xfhoe4bhy"/><path class="wm-a yqw270b7k"/><path class="fj3nl9b3a wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:share-2"} {...others} />);
}

export default Component;
