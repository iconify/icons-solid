import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bp4jx4kwz.css';
import '../../css/d/damovmc1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bp4jx4kwz"/><path class="damovmc1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-missed-duocolor-round"} {...others} />);
}

export default Component;
