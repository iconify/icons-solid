import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx4ncib0x.css';
import '../../css/l/lbiyczr4y.css';
import '../../css/j/jckwg7biv.css';
import '../../css/e/ek3-hlhhm.css';
import '../../css/p/puzg_36lo.css';
import '../../css/l/lazcgacpq.css';
import '../../css/u/ubr_u5b_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx4ncib0x wm-shadow"/><path class="lbiyczr4y"/><path class="jckwg7biv"/><path class="ek3-hlhhm"/><path class="puzg_36lo"/><path class="lazcgacpq wm-shine"/><path class="ubr_u5b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chevron-right"} {...others} />);
}

export default Component;
