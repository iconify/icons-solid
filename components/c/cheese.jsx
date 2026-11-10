import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hsy-jfbjo.css';
import '../../css/i/iy9r3wvmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hsy-jfbjo"/><path class="iy9r3wvmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cheese"} {...others} />);
}

export default Component;
