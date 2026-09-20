import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c3u3d7biv.css';
import '../../css/u/u60qi-b6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c3u3d7biv"/><path class="u60qi-b6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sandbox"} {...others} />);
}

export default Component;
