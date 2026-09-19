import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fl8cn3t_e.css';
import '../../css/d/dxabs_voe.css';
import '../../css/l/ljv3ubx8d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="fl8cn3t_e"/><path class="dxabs_voe"/><path class="ljv3ubx8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nurse-cap"} {...others} />);
}

export default Component;
