import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j984as6vx.css';
import '../../css/s/ssq6x78mi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j984as6vx"/><path class="ssq6x78mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:network"} {...others} />);
}

export default Component;
