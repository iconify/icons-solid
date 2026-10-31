import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf7bvie0m.css';
import '../../css/h/hyhsxxbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gf7bvie0m"/><path class="hyhsxxbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:moon-star-duocolor-round"} {...others} />);
}

export default Component;
