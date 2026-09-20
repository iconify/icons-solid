import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xoqr8hbno.css';
import '../../css/k/krm0hrnbn.css';
import '../../css/m/mc-5wbc8b.css';
import '../../css/b/bkv2pmbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xoqr8hbno"/><path class="krm0hrnbn"/><path class="mc-5wbc8b"/><path class="bkv2pmbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-microsoft-teams"} {...others} />);
}

export default Component;
