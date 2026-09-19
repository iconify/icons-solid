import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udty6gpuq.css';
import '../../css/q/qxqpfx-pk.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/aulgmrb2s.css';
import '../../css/s/swupebb1c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udty6gpuq"/><circle class="qxqpfx-pk"/><g class="n1mjunbsu"><path class="aulgmrb2s"/><path class="swupebb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:delete-row"} {...others} />);
}

export default Component;
