import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ok-u2vboj.css';
import '../../css/b/bu-_flb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ok-u2vboj"/><path class="bu-_flb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-cancel"} {...others} />);
}

export default Component;
