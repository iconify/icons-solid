import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smliiibgb.css';
import '../../css/u/ue4vn055y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="smliiibgb"/><path class="ue4vn055y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-dashed-three-quarter-fill"} {...others} />);
}

export default Component;
