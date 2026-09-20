import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rq-nxkb_q.css';
import '../../css/q/qau4nrf3q.css';
import '../../css/x/x32pu-b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="rq-nxkb_q"/><path class="qau4nrf3q"/><path class="x32pu-b8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-imac-check"} {...others} />);
}

export default Component;
