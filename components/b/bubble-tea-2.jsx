import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dn8-4oblp.css';
import '../../css/t/t3hcb8b_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dn8-4oblp"/><path class="t3hcb8b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bubble-tea-2"} {...others} />);
}

export default Component;
