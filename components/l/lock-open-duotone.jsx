import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jiyrhnkcn.css';
import '../../css/e/esf9wtdqe.css';
import '../../css/s/sreyo_pxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jiyrhnkcn"/><path class="esf9wtdqe"/><path class="sreyo_pxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lock-open-duotone"} {...others} />);
}

export default Component;
