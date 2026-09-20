import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jj02z2t3o.css';
import '../../css/i/isc5hcg9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jj02z2t3o"/><path class="isc5hcg9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:store-sharp-duotone"} {...others} />);
}

export default Component;
