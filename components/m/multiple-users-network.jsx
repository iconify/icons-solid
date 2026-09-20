import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6vs5k_wg.css';
import '../../css/u/u_min57un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y6vs5k_wg"/><path class="u_min57un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:multiple-users-network"} {...others} />);
}

export default Component;
