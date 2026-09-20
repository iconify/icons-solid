import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i043-pphh.css';
import '../../css/s/s_wp055nf.css';
import '../../css/k/kdybz_aht.css';
import '../../css/x/xenr55hzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i043-pphh"/><circle class="s_wp055nf"/><path class="kdybz_aht"/><circle class="xenr55hzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:car"} {...others} />);
}

export default Component;
