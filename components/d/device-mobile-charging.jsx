import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6l2v_boj.css';
import '../../css/c/cih-4sjfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i6l2v_boj"/><path class="cih-4sjfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-mobile-charging"} {...others} />);
}

export default Component;
