import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rt-w5dbai.css';
import '../../css/i/ixfe_ltzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rt-w5dbai"/><path class="ixfe_ltzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-top-left"} {...others} />);
}

export default Component;
