import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d0dt3eh6d.css';
import '../../css/w/wyjd3hmks.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="d0dt3eh6d"/><path class="wyjd3hmks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-menu"} {...others} />);
}

export default Component;
