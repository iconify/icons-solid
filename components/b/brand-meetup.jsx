import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f81e9ebhg.css';
import '../../css/c/czym_fbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f81e9ebhg"/><path class="czym_fbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-meetup"} {...others} />);
}

export default Component;
