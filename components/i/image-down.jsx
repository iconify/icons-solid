import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iwxfkwb0s.css';
import '../../css/n/n3xjuobnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iwxfkwb0s"/><path class="n3xjuobnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-down"} {...others} />);
}

export default Component;
