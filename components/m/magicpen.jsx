import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/enc0cpj_k.css';
import '../../css/a/az9oaz1lg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="enc0cpj_k"/><path class="az9oaz1lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:magicpen"} {...others} />);
}

export default Component;
