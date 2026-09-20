import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gcrhrmmun.css';
import '../../css/n/nki-9-1lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="gcrhrmmun"/><path class="nki-9-1lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-x-sharp-fill"} {...others} />);
}

export default Component;
