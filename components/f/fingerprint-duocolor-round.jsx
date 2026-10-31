import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z76awob8v.css';
import '../../css/q/qa1u-fbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z76awob8v"/><path class="qa1u-fbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fingerprint-duocolor-round"} {...others} />);
}

export default Component;
