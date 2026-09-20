import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5foht_0z.css';
import '../../css/y/y164d-ven.css';
import '../../css/m/mnt_n_bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q5foht_0z"/><path class="y164d-ven"/><path class="mnt_n_bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:vinyl"} {...others} />);
}

export default Component;
