import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k-y9zgp3c.css';
import '../../css/e/ebpla5b_i.css';
import '../../css/b/brg541bpm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="k-y9zgp3c"/><path class="ebpla5b_i"/><path class="brg541bpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot"} {...others} />);
}

export default Component;
