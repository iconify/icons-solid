import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv4ibpbvj.css';
import '../../css/r/ru4e21ugh.css';
import '../../css/p/p4ersab8m.css';
import '../../css/y/ytl90pbmb.css';
import '../../css/s/s73rw4rcx.css';
import '../../css/u/umb6ribge.css';
import '../../css/l/le9tluqqy.css';
import '../../css/u/u8nxtsgje.css';
import '../../css/s/ss705evqr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv4ibpbvj"/><path class="ru4e21ugh"/><path class="p4ersab8m"/><path class="ytl90pbmb"/><path class="s73rw4rcx"/><path class="umb6ribge"/><path class="le9tluqqy"/><path class="u8nxtsgje"/><path class="ss705evqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lovehotel"} {...others} />);
}

export default Component;
