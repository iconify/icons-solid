import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofe092k8a.css';
import '../../css/z/z_nvtgbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ofe092k8a"/><path class="z_nvtgbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-pause"} {...others} />);
}

export default Component;
