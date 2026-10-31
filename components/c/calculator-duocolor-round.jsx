import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mewpg7bky.css';
import '../../css/i/ii8jztb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mewpg7bky"/><path class="ii8jztb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calculator-duocolor-round"} {...others} />);
}

export default Component;
