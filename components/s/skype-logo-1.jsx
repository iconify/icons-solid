import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kg4433trr.css';
import '../../css/z/z__6jchhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="kg4433trr"/><path class="z__6jchhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:skype-logo-1"} {...others} />);
}

export default Component;
