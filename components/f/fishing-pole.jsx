import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa_vjqbhu.css';
import '../../css/x/xr8ks8bki.css';
import '../../css/o/o261wu5ye.css';
import '../../css/s/sf2ols3dl.css';
import '../../css/a/aa78_x-4y.css';
import '../../css/s/sbz1lbgkp.css';
import '../../css/k/k5l3rcypt.css';
import '../../css/k/kw6x-bb4l.css';
import '../../css/e/ev_-byb5b.css';
import '../../css/g/gy2-irr7u.css';
import '../../css/s/syr43q5zu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wa_vjqbhu"/><path class="xr8ks8bki"/><path class="o261wu5ye"/><path class="sf2ols3dl"/><path class="aa78_x-4y"/><path class="sbz1lbgkp"/><circle class="k5l3rcypt"/><path class="kw6x-bb4l"/><path class="ev_-byb5b"/><path class="gy2-irr7u"/><path class="syr43q5zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fishing-pole"} {...others} />);
}

export default Component;
