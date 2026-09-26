import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/su4yrrwsm.css';
import '../../css/n/nvoofreln.css';
import '../../css/q/qca-g2z6r.css';
import '../../css/h/hq1qygb3r.css';
import '../../css/h/httglvebh.css';
import '../../css/b/blkdw8b7i.css';
import '../../css/r/r6nretbxo.css';
import '../../css/m/mqh7_n0zy.css';
import '../../css/z/zb2kedx8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="su4yrrwsm"/><path class="nvoofreln"/><path class="qca-g2z6r"/><path class="hq1qygb3r"/><path class="httglvebh"/><path class="blkdw8b7i"/><path class="r6nretbxo"/><path class="mqh7_n0zy"/><path class="zb2kedx8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speedometer-low-bold-duotone"} {...others} />);
}

export default Component;
