import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g_bf8mboc.css';
import '../../css/z/z38l0obvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="g_bf8mboc"/><path class="z38l0obvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:electronic-arts-logo"} {...others} />);
}

export default Component;
