import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh-ukhyex.css';
import '../../css/e/erwpxsxta.css';
import '../../css/n/nxtr40p0j.css';
import '../../css/w/w500urbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sh-ukhyex"/><path class="erwpxsxta"/><path class="nxtr40p0j"/><path class="w500urbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speech"} {...others} />);
}

export default Component;
