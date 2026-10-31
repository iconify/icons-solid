import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu_pywb_w.css';
import '../../css/d/diu_rvd7f.css';
import '../../css/s/sztat3bpd.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nu_pywb_w"/><path class="diu_rvd7f"/><path class="sztat3bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:commonwealth-of-independent-states"} {...others} />);
}

export default Component;
