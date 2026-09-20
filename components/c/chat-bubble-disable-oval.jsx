import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/f23h26hom.css';
import '../../css/f/fwl54ibzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="f23h26hom"/><path class="fwl54ibzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chat-bubble-disable-oval"} {...others} />);
}

export default Component;
