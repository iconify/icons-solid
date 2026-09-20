import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy6osrbfr.css';
import '../../css/u/u8m4crb_x.css';
import '../../css/g/gcfi240nk.css';
import '../../css/f/fruragbxq.css';
import '../../css/f/fjev1ks2u.css';
import '../../css/s/scnji099d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vy6osrbfr"/><path class="u8m4crb_x"/><path class="gcfi240nk"/><path class="fruragbxq"/><path class="fjev1ks2u"/><path class="scnji099d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-entra-id"} {...others} />);
}

export default Component;
