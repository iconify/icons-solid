import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ukl6p-1du.css';
import '../../css/h/hn33hxbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ukl6p-1du"/><path class="hn33hxbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-share"} {...others} />);
}

export default Component;
