import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpr28qpqr.css';
import '../../css/y/ywvyr1bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mpr28qpqr"/><path class="ywvyr1bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mic-two-tone"} {...others} />);
}

export default Component;
