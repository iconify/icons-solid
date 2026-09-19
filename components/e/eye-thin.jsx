import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tl_x59b9b.css';
import '../../css/f/fo7rj5bpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="tl_x59b9b"/><path class="fo7rj5bpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:eye-thin"} {...others} />);
}

export default Component;
