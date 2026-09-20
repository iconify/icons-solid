import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qq_emibqm.css';
import '../../css/y/ycc8a0rnr.css';
import '../../css/d/dghxst7hb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qq_emibqm"/><path class="ycc8a0rnr"/><path class="dghxst7hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-single-neutral-male"} {...others} />);
}

export default Component;
