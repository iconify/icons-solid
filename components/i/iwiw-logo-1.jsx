import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cix5aghut.css';
import '../../css/j/jc2yhzb7h.css';
import '../../css/c/cqz215b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path clip-rule="evenodd" class="cix5aghut"/><path clip-rule="evenodd" class="jc2yhzb7h"/><path class="cqz215b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:iwiw-logo-1"} {...others} />);
}

export default Component;
