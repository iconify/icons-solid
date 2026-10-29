import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2nu88bho.css';
import '../../css/g/gwzz95rfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q2nu88bho"/><path class="gwzz95rfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tv-minimal-play"} {...others} />);
}

export default Component;
