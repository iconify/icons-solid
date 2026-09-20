import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bamm4mb1q.css';
import '../../css/y/yz5g-rrpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bamm4mb1q"/><path class="yz5g-rrpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:radio-two-tone"} {...others} />);
}

export default Component;
