import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/k14x9ow3b.css';
import '../../css/l/l5c66b_ve.css';
import '../../css/q/qtt1u12ec.css';
import '../../css/g/g07kgbb_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="k14x9ow3b"/><path class="l5c66b_ve"/><path class="qtt1u12ec"/><path class="g07kgbb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medicine-bottle-one"} {...others} />);
}

export default Component;
