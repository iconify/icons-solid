import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2hl2605k.css';
import '../../css/g/gqaowwb8w.css';
import '../../css/j/jrgsmpxki.css';
import '../../css/s/s_ieiw4pu.css';
import '../../css/p/pkenfjb1c.css';
import '../../css/g/gwhbx5b3l.css';
import '../../css/e/ehiduic6h.css';
import '../../css/m/m8g-facci.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z2hl2605k"/><path class="gqaowwb8w"/><path class="jrgsmpxki"/><path class="s_ieiw4pu"/><path class="pkenfjb1c"/><path class="gwhbx5b3l"/><path class="ehiduic6h"/><path class="m8g-facci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openmailboxlowered"} {...others} />);
}

export default Component;
