import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0-kz1bwg.css';
import '../../css/f/f9bl9ibhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h0-kz1bwg"/><path class="f9bl9ibhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-exclamation"} {...others} />);
}

export default Component;
