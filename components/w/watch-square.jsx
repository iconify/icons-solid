import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqydno98w.css';
import '../../css/e/er0tjywys.css';
import '../../css/l/lalau4osm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vqydno98w"/><rect class="er0tjywys"/><path class="lalau4osm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:watch-square"} {...others} />);
}

export default Component;
