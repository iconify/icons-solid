import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6w05zben.css';
import '../../css/c/cuz2sm10t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i6w05zben"/><path class="cuz2sm10t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:gallery-thumbnails"} {...others} />);
}

export default Component;
