import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrl_9-k9t.css';
import '../../css/j/ja9psewjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hrl_9-k9t"/><path class="ja9psewjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:file-tray-full"} {...others} />);
}

export default Component;
