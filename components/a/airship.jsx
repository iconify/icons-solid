import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wyyqbq60x.css';
import '../../css/a/ay929fupc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wyyqbq60x"/><path class="ay929fupc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:airship"} {...others} />);
}

export default Component;
