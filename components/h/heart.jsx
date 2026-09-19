import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/snt5_ob-o.css';
import '../../css/c/cig5qou2a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="snt5_ob-o"/><path class="cig5qou2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart"} {...others} />);
}

export default Component;
