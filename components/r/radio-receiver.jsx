import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp4f68blr.css';
import '../../css/v/vzyv8dwha.css';
import '../../css/y/y6e3kecwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yp4f68blr"/><rect class="vzyv8dwha"/><path class="y6e3kecwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:radio-receiver"} {...others} />);
}

export default Component;
