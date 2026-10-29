import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o43wv6btp.css';
import '../../css/m/m4gvcmbur.css';
import '../../css/u/uq59r5bet.css';
import '../../css/w/wg60bibvz.css';
import '../../css/b/b6tulsbro.css';
import '../../css/h/htdaty3rk.css';
import '../../css/w/wr2s_cd2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o43wv6btp wm-shadow"/><path class="m4gvcmbur"/><path class="uq59r5bet"/><path class="wg60bibvz"/><path class="b6tulsbro"/><path class="htdaty3rk wm-shine"/><path class="wr2s_cd2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:arrow-big-up"} {...others} />);
}

export default Component;
