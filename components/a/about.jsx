import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbv6r8omk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/lzbjlqyni.css';
import '../../css/a/asp4yobns.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wbv6r8omk"/><g class="n1mjunbsu"><path class="lzbjlqyni"/><circle class="asp4yobns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:about"} {...others} />);
}

export default Component;
