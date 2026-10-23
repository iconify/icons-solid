import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fiq-qll8b.css';
import '../../css/q/qg1c2zbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fiq-qll8b"/><path class="qg1c2zbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cookie"} {...others} />);
}

export default Component;
