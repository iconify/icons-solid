import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps2jawg_f.css';
import '../../css/k/k85rg8b0j.css';
import '../../css/e/ethuhhm8e.css';
import '../../css/p/ps2m0xfqt.css';
import '../../css/w/w2m-ufbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ps2jawg_f"/><path class="k85rg8b0j"/><path class="ethuhhm8e"/><path class="ps2m0xfqt"/><path class="w2m-ufbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-2-outline"} {...others} />);
}

export default Component;
