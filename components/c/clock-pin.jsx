import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fmqne92pl.css';
import '../../css/w/w9s65qlif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fmqne92pl"/><path class="w9s65qlif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-pin"} {...others} />);
}

export default Component;
