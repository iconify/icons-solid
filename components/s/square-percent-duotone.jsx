import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bwnpao7ft.css';
import '../../css/r/r0knw1b4v.css';
import '../../css/b/btfg0oi0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bwnpao7ft"/><path class="r0knw1b4v"/><path class="btfg0oi0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-percent-duotone"} {...others} />);
}

export default Component;
