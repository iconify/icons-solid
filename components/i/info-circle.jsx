import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1_3zo_mi.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l1_3zo_mi"/><path class="qw34h8bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:info-circle"} {...others} />);
}

export default Component;
