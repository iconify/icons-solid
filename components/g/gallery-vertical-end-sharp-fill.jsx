import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h619z1buu.css';
import '../../css/a/azxxyhb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h619z1buu"/><path class="azxxyhb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-vertical-end-sharp-fill"} {...others} />);
}

export default Component;
