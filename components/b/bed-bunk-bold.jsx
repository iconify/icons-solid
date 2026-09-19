import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j3otp5bhd.css';
import '../../css/m/mli9f47jk.css';
import '../../css/c/cbfyi1blz.css';
import '../../css/e/em_t-ebtw.css';
import '../../css/c/cwbehnbmu.css';
import '../../css/e/etzxpsben.css';
import '../../css/g/g3bpael9c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="j3otp5bhd"/><path class="mli9f47jk"/><path class="cbfyi1blz"/><path class="em_t-ebtw"/><path class="cwbehnbmu"/><path class="etzxpsben"/><path class="g3bpael9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bed-bunk-bold"} {...others} />);
}

export default Component;
