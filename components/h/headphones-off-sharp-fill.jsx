import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uoztf63xy.css';
import '../../css/g/gf2jrs6ep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uoztf63xy"/><path class="gf2jrs6ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headphones-off-sharp-fill"} {...others} />);
}

export default Component;
