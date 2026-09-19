import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/miusgdbpn.css';
import '../../css/d/dc8_s3fpx.css';
import '../../css/i/iw2ko0b_c.css';
import '../../css/a/al4wg93to.css';
import '../../css/b/bhalt8b_x.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="miusgdbpn"/><path class="dc8_s3fpx"/><g class="iw2ko0b_c"><path class="al4wg93to"/><path class="bhalt8b_x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:to-1x1"} {...others} />);
}

export default Component;
