import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r-qclcbiq.css';
import '../../css/d/d1igh63-p.css';
import '../../css/k/kxc2n7muj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="r-qclcbiq"/><path clip-rule="evenodd" class="d1igh63-p"/><path class="kxc2n7muj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:open-door"} {...others} />);
}

export default Component;
