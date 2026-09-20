import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ooa90mb3c.css';
import '../../css/h/hq54ggm8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ooa90mb3c"/><path class="hq54ggm8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:direction-sign"} {...others} />);
}

export default Component;
