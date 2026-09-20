import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mutq2p_rd.css';
import '../../css/o/o6099mb7z.css';
import '../../css/f/fi8fabbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="mutq2p_rd"/><path class="o6099mb7z"/><path class="fi8fabbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flask-conical-off-sharp-two-tone"} {...others} />);
}

export default Component;
