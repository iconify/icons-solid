import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/whpvzgbzi.css';
import '../../css/l/l39nucbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="whpvzgbzi"/><path class="l39nucbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:sitemap"} {...others} />);
}

export default Component;
