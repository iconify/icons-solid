import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wt642ibht.css';
import '../../css/y/y1erqjdmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wt642ibht"/><path class="y1erqjdmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-speaker-off"} {...others} />);
}

export default Component;
