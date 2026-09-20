import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5t5vobvp.css';
import '../../css/u/u8eyx3_mz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q5t5vobvp"/><path class="u8eyx3_mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paper-bag-two-tone"} {...others} />);
}

export default Component;
