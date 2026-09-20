import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zparngddh.css';
import '../../css/p/py17pdbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="zparngddh"/><path clip-rule="evenodd" class="py17pdbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:playerfm-logo"} {...others} />);
}

export default Component;
