import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/abul2j-5n.css';
import '../../css/s/sbapehkmb.css';
import '../../css/b/b76bl4bjw.css';
import '../../css/l/l3aboiq4f.css';
import '../../css/j/jsbk_1b0m.css';
import '../../css/t/tkl44pbbg.css';
import '../../css/i/i-zf1pp-h.css';
import '../../css/x/x32gz2vbt.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/s/sw__cecuh.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="abul2j-5n wm-shadow"/><path class="sbapehkmb"/><path class="b76bl4bjw"/><path class="l3aboiq4f"/><path class="jsbk_1b0m"/><path class="tkl44pbbg"/><path class="i-zf1pp-h"/><path class="wm-shine x32gz2vbt"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="sw__cecuh wm-s"/><path class="gmwf64byv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:timer-off"} {...others} />);
}

export default Component;
