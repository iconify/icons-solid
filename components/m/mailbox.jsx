import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n520vob6w.css';
import '../../css/j/jsik09t_m.css';
import '../../css/z/zfctwcctg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="n520vob6w"/><path class="jsik09t_m"/><path class="zfctwcctg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mailbox"} {...others} />);
}

export default Component;
