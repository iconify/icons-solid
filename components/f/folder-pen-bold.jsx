import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jppf41bdk.css';
import '../../css/j/j-xg48kfo.css';
import '../../css/t/tnn4k8b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jppf41bdk"/><path class="j-xg48kfo"/><path clip-rule="evenodd" class="tnn4k8b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-pen-bold"} {...others} />);
}

export default Component;
