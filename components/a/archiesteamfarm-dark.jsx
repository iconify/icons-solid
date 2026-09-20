import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm6ivxbpv.css';
import '../../css/r/ryv1mabbs.css';
import '../../css/i/igam31bgk.css';
import '../../css/t/tk1cyqr2k.css';
import '../../css/g/gw9hi4k1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sm6ivxbpv"/><path class="ryv1mabbs"/><path class="igam31bgk"/><path class="tk1cyqr2k"/><path class="gw9hi4k1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:archiesteamfarm-dark"} {...others} />);
}

export default Component;
