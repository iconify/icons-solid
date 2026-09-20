import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kibnv3f1k.css';
import '../../css/n/nfl8imb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kibnv3f1k"/><path class="nfl8imb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tags-chevron-left"} {...others} />);
}

export default Component;
