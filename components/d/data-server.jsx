import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hoihubcdt.css';
import '../../css/q/qlkj-ye-j.css';
import '../../css/g/ga6yqxbkp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="hoihubcdt"/><path class="qlkj-ye-j"/><path class="ga6yqxbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:data-server"} {...others} />);
}

export default Component;
