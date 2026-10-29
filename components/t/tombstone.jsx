import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al-4-0btz.css';
import '../../css/t/twbohlb9d.css';
import '../../css/l/l9h-wybvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="al-4-0btz wm-k"/><path class="twbohlb9d wm-a"/><path class="l9h-wybvf wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tombstone"} {...others} />);
}

export default Component;
