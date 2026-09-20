import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgeikoyff.css';
import '../../css/p/p298j6tuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hgeikoyff"/><path class="p298j6tuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sphere-off"} {...others} />);
}

export default Component;
