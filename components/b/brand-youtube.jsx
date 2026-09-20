import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1xefcbvp.css';
import '../../css/f/fbkse1tbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l1xefcbvp"/><path class="fbkse1tbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-youtube"} {...others} />);
}

export default Component;
