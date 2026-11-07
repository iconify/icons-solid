import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqbs--b0w.css';
import '../../css/b/bgpl6nb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqbs--b0w"/><path clip-rule="evenodd" class="bgpl6nb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-bold"} {...others} />);
}

export default Component;
