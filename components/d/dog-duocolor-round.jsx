import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3_m5ra7m.css';
import '../../css/t/tbvclnbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h3_m5ra7m"/><path class="tbvclnbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dog-duocolor-round"} {...others} />);
}

export default Component;
