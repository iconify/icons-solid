import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rurdy5bct.css';
import '../../css/y/yqbrdyu5x.css';
import '../../css/q/qse9eiber.css';
import '../../css/b/bslwnxr-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rurdy5bct"/><path class="yqbrdyu5x"/><path class="qse9eiber"/><path clip-rule="evenodd" class="bslwnxr-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-code-outline"} {...others} />);
}

export default Component;
