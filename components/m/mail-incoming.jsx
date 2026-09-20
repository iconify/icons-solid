import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yiukdobpq.css';
import '../../css/m/mmvlngp9y.css';
import '../../css/t/tip362b0e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yiukdobpq"/><path class="mmvlngp9y"/><path class="tip362b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-incoming"} {...others} />);
}

export default Component;
