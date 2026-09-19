import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/igfdbbpka.css';
import '../../css/t/th-lrf6oo.css';
import '../../css/a/avawqp-np.css';
import '../../css/g/g2ohucvan.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="igfdbbpka"/><path class="th-lrf6oo"/><path class="avawqp-np"/><path class="g2ohucvan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:usb-one"} {...others} />);
}

export default Component;
