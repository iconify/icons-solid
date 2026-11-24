import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pbh_yt8nh.css';
import '../../css/k/k--7vqzux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pbh_yt8nh"/><path class="k--7vqzux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:school-pin"} {...others} />);
}

export default Component;
