import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i0tz3zvbq.css';
import '../../css/k/kjliana8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i0tz3zvbq"/><path class="kjliana8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:equalizer-duocolor-round"} {...others} />);
}

export default Component;
