import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n92r70som.css';
import '../../css/f/fd5zpjvnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n92r70som"/><path class="fd5zpjvnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-zig-zag"} {...others} />);
}

export default Component;
