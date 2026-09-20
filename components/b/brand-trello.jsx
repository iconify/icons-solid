import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pi8645b3h.css';
import '../../css/z/z-y34nm3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pi8645b3h"/><path class="z-y34nm3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-trello"} {...others} />);
}

export default Component;
