import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7iagwb-d.css';
import '../../css/l/lxr-c948j.css';
import '../../css/x/xsw1oxbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x7iagwb-d"/><path class="lxr-c948j"/><path class="xsw1oxbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:subtitles-sparkles-two-tone"} {...others} />);
}

export default Component;
