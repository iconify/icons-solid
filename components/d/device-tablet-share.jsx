import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfkbs9thc.css';
import '../../css/y/y-t3tbb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gfkbs9thc"/><path class="y-t3tbb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-share"} {...others} />);
}

export default Component;
