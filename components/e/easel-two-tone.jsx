import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esayqubgy.css';
import '../../css/l/l2qg27btt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="esayqubgy"/><path class="l2qg27btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:easel-two-tone"} {...others} />);
}

export default Component;
