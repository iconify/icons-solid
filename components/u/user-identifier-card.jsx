import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tur3cnbyi.css';
import '../../css/p/p0a1_0m1u.css';
import '../../css/j/j_fd6lnam.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tur3cnbyi"/><path class="p0a1_0m1u"/><path class="j_fd6lnam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-identifier-card"} {...others} />);
}

export default Component;
