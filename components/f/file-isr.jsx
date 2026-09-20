import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-ytxabdb.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kvvhfebba.css';
import '../../css/n/n_3oplyam.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGrajsLe6H" class="w-ytxabdb"/></defs><g class="nrj6p8qat"><use href="#SVGrajsLe6H"/><use href="#SVGrajsLe6H"/><path class="kvvhfebba"/><path class="n_3oplyam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-isr"} {...others} />);
}

export default Component;
