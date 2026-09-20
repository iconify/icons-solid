import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dmu_g_-6x.css';
import '../../css/s/sy10l8b6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dmu_g_-6x"/><path class="sy10l8b6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-heart"} {...others} />);
}

export default Component;
