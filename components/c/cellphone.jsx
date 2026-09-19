import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmg769b0b.css';
import '../../css/p/p_7n5y-dj.css';
import '../../css/i/ib5trylwt.css';
import '../../css/l/lnkztgboy.css';
import '../../css/o/oo-p8yb3o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dmg769b0b"/><path class="p_7n5y-dj"/><path class="ib5trylwt"/><path class="lnkztgboy"/><path class="oo-p8yb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cellphone"} {...others} />);
}

export default Component;
