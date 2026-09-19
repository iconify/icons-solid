import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp97lfoxd.css';
import '../../css/k/k3ypocbdl.css';
import '../../css/t/tspdbdasy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="rp97lfoxd"><path clip-rule="evenodd" class="k3ypocbdl"/><path class="tspdbdasy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pause"} {...others} />);
}

export default Component;
