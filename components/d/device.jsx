import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6_6evbmz.css';
import '../../css/h/h6h-n8bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="r6_6evbmz"/><path class="h6h-n8bcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:device"} {...others} />);
}

export default Component;
