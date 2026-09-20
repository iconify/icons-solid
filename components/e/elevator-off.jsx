import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w178-tccq.css';
import '../../css/i/iz6ao-rla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w178-tccq"/><path class="iz6ao-rla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:elevator-off"} {...others} />);
}

export default Component;
