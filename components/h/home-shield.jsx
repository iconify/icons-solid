import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1i_5nb0f.css';
import '../../css/v/v-33t5vzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p1i_5nb0f"/><path class="v-33t5vzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-shield"} {...others} />);
}

export default Component;
