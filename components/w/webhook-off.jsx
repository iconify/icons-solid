import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zwbw2xb4k.css';
import '../../css/f/fp2xmibiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zwbw2xb4k"/><path class="fp2xmibiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:webhook-off"} {...others} />);
}

export default Component;
