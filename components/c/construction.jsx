import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnpiodj2x.css';
import '../../css/q/qa1y2vrug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="tnpiodj2x"/><path class="qa1y2vrug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:construction"} {...others} />);
}

export default Component;
