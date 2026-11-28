import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/md4di2vlv.css';
import '../../css/h/hraeq983i.css';
import '../../css/u/uvb-1pbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="md4di2vlv"/><path class="hraeq983i"/><path class="uvb-1pbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:golf"} {...others} />);
}

export default Component;
