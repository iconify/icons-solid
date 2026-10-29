import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3edubcso.css';
import '../../css/n/n-av0fbcs.css';
import '../../css/g/g16sgskxp.css';
import '../../css/k/k-zx9_b-g.css';
import '../../css/k/kek7r5jdu.css';
import '../../css/c/ctzaxobuq.css';
import '../../css/r/rq2nw3b0d.css';
import '../../css/c/cyjgg-loo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y3edubcso"/><path class="n-av0fbcs wm-k"/><path class="g16sgskxp wm-k"/><path class="k-zx9_b-g wm-k"/><path class="kek7r5jdu wm-k"/><path class="ctzaxobuq wm-k"/><path class="rq2nw3b0d wm-shine"/><path class="cyjgg-loo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:alert-triangle"} {...others} />);
}

export default Component;
