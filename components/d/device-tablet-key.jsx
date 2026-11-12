import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h58te9bnz.css';
import '../../css/r/rxgk914hi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h58te9bnz"/><path class="rxgk914hi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-key"} {...others} />);
}

export default Component;
