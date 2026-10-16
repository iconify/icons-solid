import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0k19hilo.css';
import '../../css/p/ps9svrb0r.css';
import '../../css/n/niyv1hwum.css';
import '../../css/r/rj41gebbz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r0k19hilo"/><path class="ps9svrb0r"/><path class="niyv1hwum"/><path class="rj41gebbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shovel-48-bold"} {...others} />);
}

export default Component;
