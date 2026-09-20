import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mx9vvu0zn.css';
import '../../css/a/a9etoubpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mx9vvu0zn"/><path class="a9etoubpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-off-two-tone"} {...others} />);
}

export default Component;
