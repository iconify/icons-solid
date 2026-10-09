import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf5_omxwj.css';
import '../../css/t/txu9wlbpb.css';
import '../../css/i/ip90d4b-u.css';
import '../../css/u/u0890tgpq.css';
import '../../css/h/huv_e_h8i.css';
import '../../css/m/mwwv_-70d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uf5_omxwj"/><path class="txu9wlbpb"/><path class="ip90d4b-u"/><path class="u0890tgpq"/><path class="huv_e_h8i"/><path class="mwwv_-70d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bicycle-20-bold"} {...others} />);
}

export default Component;
