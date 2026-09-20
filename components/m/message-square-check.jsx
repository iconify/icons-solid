import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ens2njbhi.css';
import '../../css/r/rdobdxbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ens2njbhi"/><path class="rdobdxbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-check"} {...others} />);
}

export default Component;
