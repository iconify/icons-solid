import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zbtapkbpv.css';
import '../../css/e/erru8j8oi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zbtapkbpv"/><path class="erru8j8oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:needle-thread"} {...others} />);
}

export default Component;
