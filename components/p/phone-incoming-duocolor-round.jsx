import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2x_xtbwq.css';
import '../../css/d/damovmc1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s2x_xtbwq"/><path class="damovmc1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-incoming-duocolor-round"} {...others} />);
}

export default Component;
