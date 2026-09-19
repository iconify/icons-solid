import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bwdn0jbfj.css';
import '../../css/x/xd-jhwbrt.css';
import '../../css/s/s2-q4d05f.css';
import '../../css/c/crt3obbnh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="bwdn0jbfj"/><path class="xd-jhwbrt"/><path class="s2-q4d05f"/><path class="crt3obbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-tears"} {...others} />);
}

export default Component;
