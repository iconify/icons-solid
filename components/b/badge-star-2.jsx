import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xa_5awkhe.css';
import '../../css/g/gv_l_9bmc.css';
import '../../css/v/vrk4e3cim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="xa_5awkhe"/><path class="gv_l_9bmc"/><path class="vrk4e3cim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:badge-star-2"} {...others} />);
}

export default Component;
