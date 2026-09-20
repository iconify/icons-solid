import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2r7qcbkb.css';
import '../../css/z/znv67ab_n.css';
import '../../css/v/vcujh5byb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i2r7qcbkb"/><rect class="znv67ab_n"/><path class="vcujh5byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-horizontal-justify-end"} {...others} />);
}

export default Component;
