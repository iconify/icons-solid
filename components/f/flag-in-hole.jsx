import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd4ziob-y.css';
import '../../css/l/ltsjrsb1c.css';
import '../../css/x/xtl0sqbog.css';
import '../../css/t/tqg1rxb0n.css';
import '../../css/j/j7widtbdv.css';
import '../../css/z/zh8nksz7m.css';
import '../../css/r/rnicdwtop.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vd4ziob-y"/><path class="ltsjrsb1c"/><path class="xtl0sqbog"/><path class="tqg1rxb0n"/><path class="j7widtbdv"/><path class="zh8nksz7m"/><path class="rnicdwtop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:flag-in-hole"} {...others} />);
}

export default Component;
