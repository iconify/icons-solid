import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvd42ib4r.css';
import '../../css/p/p3qfggx2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fvd42ib4r"/><path class="p3qfggx2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shield-check-sharp-duotone"} {...others} />);
}

export default Component;
