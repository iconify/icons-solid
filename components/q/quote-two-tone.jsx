import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hk2d_961e.css';
import '../../css/g/gn69crbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hk2d_961e"/><path class="gn69crbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:quote-two-tone"} {...others} />);
}

export default Component;
