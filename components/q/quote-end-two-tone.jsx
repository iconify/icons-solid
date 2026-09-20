import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uidlwq_2j.css';
import '../../css/l/l2b51eb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uidlwq_2j"/><path class="l2b51eb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:quote-end-two-tone"} {...others} />);
}

export default Component;
