import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs844_b3h.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vs844_b3h"/><path class="qw34h8bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:info-square"} {...others} />);
}

export default Component;
