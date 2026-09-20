import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mdn8cibnw.css';
import '../../css/i/ifxdngbna.css';
import '../../css/p/p2xmk4byv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mdn8cibnw"/><path class="ifxdngbna"/><path class="p2xmk4byv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:speaker-1"} {...others} />);
}

export default Component;
