import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wynwjpree.css';
import '../../css/z/zvs6qbcnn.css';
import '../../css/m/my9nm-bwh.css';
import '../../css/j/j3me78b4l.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wynwjpree"/><circle class="zvs6qbcnn"/><path class="my9nm-bwh"/><circle class="j3me78b4l"/><circle class="ny1qr-80o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:stroller"} {...others} />);
}

export default Component;
