import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s4_6trqjk.css';
import '../../css/b/bv0e1xbkk.css';
import '../../css/a/a7w5iie1m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="s4_6trqjk"/><path class="bv0e1xbkk"/><path class="a7w5iie1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:speaker-1"} {...others} />);
}

export default Component;
