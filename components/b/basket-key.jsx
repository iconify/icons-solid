import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y__9fy_8j.css';
import '../../css/g/g41jcv7ra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y__9fy_8j"/><path class="g41jcv7ra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-key"} {...others} />);
}

export default Component;
