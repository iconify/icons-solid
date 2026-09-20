import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smxycjv8r.css';
import '../../css/d/d40k5f_qe.css';
import '../../css/o/o3owdebtz.css';
import '../../css/m/m6tjarb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="smxycjv8r"/><path class="d40k5f_qe"/><path class="o3owdebtz"/><path class="m6tjarb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-2-broken"} {...others} />);
}

export default Component;
