import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mftj2rb4h.css';
import '../../css/h/hv4kfqbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mftj2rb4h"/><path class="hv4kfqbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ball-basketball"} {...others} />);
}

export default Component;
