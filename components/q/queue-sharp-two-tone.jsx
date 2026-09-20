import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nnj9csb9a.css';
import '../../css/n/n_53gi21w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="nnj9csb9a"/><path class="n_53gi21w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:queue-sharp-two-tone"} {...others} />);
}

export default Component;
