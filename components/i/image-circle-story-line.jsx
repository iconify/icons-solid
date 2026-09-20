import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-byc0b3i.css';
import '../../css/v/v90gbqbox.css';
import '../../css/l/l28jqobbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s-byc0b3i"/><circle class="v90gbqbox"/><path class="l28jqobbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-circle-story-line"} {...others} />);
}

export default Component;
