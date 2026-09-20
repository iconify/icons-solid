import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gfcp4waxz.css';
import '../../css/b/bj1fc_bvz.css';
import '../../css/t/tbwsu36gi.css';
import '../../css/q/qn7woobnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gfcp4waxz"/><path class="bj1fc_bvz"/><path class="tbwsu36gi"/><path class="qn7woobnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:roller"} {...others} />);
}

export default Component;
