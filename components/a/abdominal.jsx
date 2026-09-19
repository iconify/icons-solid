import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmmrsb-e.css';
import '../../css/n/nefb2ix1e.css';
import '../../css/m/m34a79nzd.css';
import '../../css/o/oxr5sib_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ijmmrsb-e"/><path class="nefb2ix1e"/><path class="m34a79nzd"/><path class="oxr5sib_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:abdominal"} {...others} />);
}

export default Component;
