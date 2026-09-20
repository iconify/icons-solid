import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1kxihaen.css';
import '../../css/w/wmgnbv93z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g1kxihaen"/><path class="wmgnbv93z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:door-open"} {...others} />);
}

export default Component;
