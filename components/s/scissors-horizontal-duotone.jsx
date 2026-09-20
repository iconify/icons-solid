import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu0_cqzeq.css';
import '../../css/b/bkofr4lgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eu0_cqzeq"/><path class="bkofr4lgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-horizontal-duotone"} {...others} />);
}

export default Component;
