import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qj6e6b9kp.css';
import '../../css/s/soa8t5ume.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qj6e6b9kp"/><path class="soa8t5ume"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-appgallery"} {...others} />);
}

export default Component;
