import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jxerl8ujt.css';
import '../../css/j/jwkft-beh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jxerl8ujt"/><path class="jwkft-beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watch-2"} {...others} />);
}

export default Component;
