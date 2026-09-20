import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt8p-7asf.css';
import '../../css/r/rqejj92bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pt8p-7asf"/><path class="rqejj92bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-network-fill"} {...others} />);
}

export default Component;
