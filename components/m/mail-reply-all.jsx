import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b32c94l0u.css';
import '../../css/b/b28hxqbqh.css';
import '../../css/v/v-evtzw3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="b32c94l0u"/><path class="b28hxqbqh"/><path class="v-evtzw3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:mail-reply-all"} {...others} />);
}

export default Component;
