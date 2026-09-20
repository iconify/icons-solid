import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_31zlgye.css';
import '../../css/k/k8w5d41sf.css';
import '../../css/u/uudw0_w1p.css';
import '../../css/c/c7difwrew.css';
import '../../css/z/z2z5jmiof.css';
import '../../css/l/lu26vrbbu.css';
import '../../css/h/hajbmtbfn.css';
import '../../css/d/dpx2gsnql.css';
import '../../css/s/s2dng_jyr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_31zlgye"/><path class="k8w5d41sf"/><path class="uudw0_w1p"/><path class="c7difwrew"/><path class="z2z5jmiof"/><path class="lu26vrbbu"/><path class="hajbmtbfn"/><path class="dpx2gsnql"/><path class="s2dng_jyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:heart-with-arrow"} {...others} />);
}

export default Component;
