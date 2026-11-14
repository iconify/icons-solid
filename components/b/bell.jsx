import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wl2tej6zd.css';
import '../../css/y/y0-h8cyyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wl2tej6zd"/><path class="y0-h8cyyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:bell"} {...others} />);
}

export default Component;
