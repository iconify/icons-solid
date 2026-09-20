import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w5f8l8bse.css';
import '../../css/p/p49bt2bzw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w5f8l8bse"/><path class="p49bt2bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:code-monitor-1"} {...others} />);
}

export default Component;
