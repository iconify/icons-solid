import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu0_cqzeq.css';
import '../../css/x/x7eo_40-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eu0_cqzeq"/><path class="x7eo_40-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-horizontal-fill"} {...others} />);
}

export default Component;
