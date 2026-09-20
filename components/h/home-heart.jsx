import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sb3xpybes.css';
import '../../css/p/p1c57ab3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sb3xpybes"/><path class="p1c57ab3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-heart"} {...others} />);
}

export default Component;
