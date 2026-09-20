import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vemnhttld.css';
import '../../css/j/j2u8cdctm.css';
import '../../css/c/cbfpxhqzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vemnhttld"/><path class="j2u8cdctm"/><path class="cbfpxhqzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:type-area"} {...others} />);
}

export default Component;
