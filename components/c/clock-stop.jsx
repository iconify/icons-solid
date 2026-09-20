import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/csxnyntbf.css';
import '../../css/l/lp2pad0nl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="csxnyntbf"/><path class="lp2pad0nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-stop"} {...others} />);
}

export default Component;
