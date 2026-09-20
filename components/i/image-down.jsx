import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqi_kabmz.css';
import '../../css/n/nre_4w4zq.css';
import '../../css/n/nol19vq4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tqi_kabmz"/><path class="nre_4w4zq"/><circle class="nol19vq4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:image-down"} {...others} />);
}

export default Component;
