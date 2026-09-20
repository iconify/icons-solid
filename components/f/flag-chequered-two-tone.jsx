import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dcm7c4dqi.css';
import '../../css/x/xaa866hyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dcm7c4dqi"/><path class="xaa866hyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flag-chequered-two-tone"} {...others} />);
}

export default Component;
