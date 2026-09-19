import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7bnrcbqn.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/l/lxy1vnbki.css';
import '../../css/t/t5fhah78y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y7bnrcbqn"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="lxy1vnbki"/><path class="t5fhah78y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:error-picture"} {...others} />);
}

export default Component;
