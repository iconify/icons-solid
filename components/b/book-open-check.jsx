import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9z_vjbpx.css';
import '../../css/l/lzogmbc1j.css';
import '../../css/x/xhr4lcpzu.css';
import '../../css/r/rxtv58b2d.css';
import '../../css/l/lo297249j.css';
import '../../css/p/pzdvvgbeh.css';
import '../../css/p/pslrejgia.css';
import '../../css/m/mjcrmltyp.css';
import '../../css/a/adwxm9m8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k9z_vjbpx wm-shadow"/><path class="lzogmbc1j wm-k"/><path class="wm-k xhr4lcpzu"/><path class="rxtv58b2d wm-k"/><path class="lo297249j wm-k"/><path class="pzdvvgbeh wm-shine"/><path class="pslrejgia wm-k"/><path class="mjcrmltyp wm-k"/><path class="adwxm9m8c wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:book-open-check"} {...others} />);
}

export default Component;
