import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzo7-e_dt.css';
import '../../css/a/ao7ppiy0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dzo7-e_dt"/><path class="ao7ppiy0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-bolt"} {...others} />);
}

export default Component;
