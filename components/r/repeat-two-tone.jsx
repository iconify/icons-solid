import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wc84ktb0x.css';
import '../../css/o/o_r3tojiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wc84ktb0x"/><path class="o_r3tojiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:repeat-two-tone"} {...others} />);
}

export default Component;
