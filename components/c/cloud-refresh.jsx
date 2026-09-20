import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/su1kuc3dh.css';
import '../../css/v/vvzc_wdye.css';
import '../../css/v/vlevckb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="su1kuc3dh"/><path class="vvzc_wdye"/><path class="vlevckb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cloud-refresh"} {...others} />);
}

export default Component;
