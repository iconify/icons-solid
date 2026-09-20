import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uwg1cjjcv.css';
import '../../css/h/h_omkp9ak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uwg1cjjcv"/><path class="h_omkp9ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-10"} {...others} />);
}

export default Component;
