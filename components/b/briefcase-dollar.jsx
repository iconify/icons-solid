import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tj0_wqbqu.css';
import '../../css/c/cpkr8u40e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tj0_wqbqu"/><path class="cpkr8u40e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:briefcase-dollar"} {...others} />);
}

export default Component;
