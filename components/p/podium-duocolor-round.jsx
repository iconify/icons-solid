import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp-oq1upk.css';
import '../../css/b/bq8rv2bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tp-oq1upk"/><path class="bq8rv2bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podium-duocolor-round"} {...others} />);
}

export default Component;
