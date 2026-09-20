import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slt4_bbhr.css';
import '../../css/x/xgsub_bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="slt4_bbhr"/><path class="xgsub_bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hourglass-low"} {...others} />);
}

export default Component;
