import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygr-3532s.css';
import '../../css/c/cr9p0dbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ygr-3532s"/><path class="cr9p0dbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:warehouse-duocolor-round"} {...others} />);
}

export default Component;
