import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_9nbbmkw.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/o/o7ck84b0h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z_9nbbmkw"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="o7ck84b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:success-picture"} {...others} />);
}

export default Component;
