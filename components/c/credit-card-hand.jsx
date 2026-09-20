import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_tmkojhy.css';
import '../../css/w/w6gl6bbba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e_tmkojhy"/><path class="w6gl6bbba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:credit-card-hand"} {...others} />);
}

export default Component;
