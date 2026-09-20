import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqydno98w.css';
import '../../css/e/er0tjywys.css';
import '../../css/i/i1cr2d3yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vqydno98w"/><rect class="er0tjywys"/><path class="i1cr2d3yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:watch-text"} {...others} />);
}

export default Component;
