import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ru57a09hd.css';
import '../../css/q/qkaecqabr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ru57a09hd"/><path class="qkaecqabr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hotel-duocolor-round"} {...others} />);
}

export default Component;
