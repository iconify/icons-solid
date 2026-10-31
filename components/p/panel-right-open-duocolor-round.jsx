import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lngqv7bke.css';
import '../../css/e/e-jy5zmeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lngqv7bke"/><path class="e-jy5zmeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-right-open-duocolor-round"} {...others} />);
}

export default Component;
