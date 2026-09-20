import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/coj6xqbaw.css';
import '../../css/v/vs3afk6-b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="coj6xqbaw"/><path class="vs3afk6-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:webcam"} {...others} />);
}

export default Component;
