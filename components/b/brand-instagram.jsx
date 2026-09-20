import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qj6e6b9kp.css';
import '../../css/n/n3efbnb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qj6e6b9kp"/><path class="n3efbnb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-instagram"} {...others} />);
}

export default Component;
