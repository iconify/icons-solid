import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ohy9-3bsv.css';
import '../../css/a/axw250bti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ohy9-3bsv"/><path class="axw250bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:usb"} {...others} />);
}

export default Component;
