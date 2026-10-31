import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5dhe1bml.css';
import '../../css/e/eh8r7jx3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i5dhe1bml"/><path class="eh8r7jx3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-rupee-duocolor-round"} {...others} />);
}

export default Component;
