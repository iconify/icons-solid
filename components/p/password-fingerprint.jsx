import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_p66dgsd.css';
import '../../css/i/i138tkbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j_p66dgsd"/><path class="i138tkbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:password-fingerprint"} {...others} />);
}

export default Component;
