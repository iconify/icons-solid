import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fp-kmxbgc.css';
import '../../css/w/wlu4pccwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fp-kmxbgc"/><path class="wlu4pccwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hearts"} {...others} />);
}

export default Component;
