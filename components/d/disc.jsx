import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwso93-0v.css';
import '../../css/t/tvp-k6b0y.css';
import '../../css/i/ifd1nac0z.css';
import '../../css/s/srph1ccjr.css';
import '../../css/t/tv23zi2am.css';
import '../../css/q/qru_6lbzz.css';
import '../../css/w/wwcw65kjg.css';
import '../../css/c/cqq4h5byo.css';
import '../../css/b/b-hve9vsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwso93-0v wm-shadow"/><path class="tvp-k6b0y wm-k"/><path class="ifd1nac0z wm-k"/><path class="srph1ccjr wm-k"/><path class="tv23zi2am wm-k"/><path class="qru_6lbzz wm-k"/><path class="wm-shine wwcw65kjg"/><path class="cqq4h5byo wm-k"/><path class="b-hve9vsj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:disc"} {...others} />);
}

export default Component;
