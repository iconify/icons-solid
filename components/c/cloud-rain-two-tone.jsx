import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_hti76ob.css';
import '../../css/s/sf7f9yjnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n_hti76ob"/><path class="sf7f9yjnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-rain-two-tone"} {...others} />);
}

export default Component;
