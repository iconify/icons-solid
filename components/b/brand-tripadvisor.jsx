import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da7-wmo7e.css';
import '../../css/n/nshz0cc9o.css';
import '../../css/a/av09fzcjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="da7-wmo7e"/><path class="nshz0cc9o"/><path class="av09fzcjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-tripadvisor"} {...others} />);
}

export default Component;
