import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kzeg54b4h.css';
import '../../css/g/g5bgjtb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="kzeg54b4h"/><path class="g5bgjtb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bring-to-front"} {...others} />);
}

export default Component;
