import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu6-uy96e.css';
import '../../css/a/af7l3rbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wu6-uy96e"/><path class="af7l3rbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-down-left-box-two-tone"} {...others} />);
}

export default Component;
