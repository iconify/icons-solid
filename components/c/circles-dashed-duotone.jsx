import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfjos5b6y.css';
import '../../css/q/q5f3lzm2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sfjos5b6y"/><path class="q5f3lzm2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circles-dashed-duotone"} {...others} />);
}

export default Component;
