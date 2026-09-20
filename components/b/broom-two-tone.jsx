import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq0g8ab4w.css';
import '../../css/w/wfmckqbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tq0g8ab4w"/><path class="wfmckqbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:broom-two-tone"} {...others} />);
}

export default Component;
