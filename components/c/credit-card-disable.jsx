import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dvj_53aom.css';
import '../../css/u/u3br1s44l.css';
import '../../css/b/bpb98ob3v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dvj_53aom"/><path class="u3br1s44l"/><path class="bpb98ob3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:credit-card-disable"} {...others} />);
}

export default Component;
