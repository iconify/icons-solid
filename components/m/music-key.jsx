import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/etu_4bcik.css';
import '../../css/y/yh3u2r5nr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="etu_4bcik"/><path class="yh3u2r5nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:music-key"} {...others} />);
}

export default Component;
