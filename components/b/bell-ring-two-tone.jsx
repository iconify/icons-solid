import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vuin9ubsk.css';
import '../../css/g/g9pdv-bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vuin9ubsk"/><path class="g9pdv-bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-ring-two-tone"} {...others} />);
}

export default Component;
