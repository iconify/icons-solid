import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r63fawbfm.css';
import '../../css/v/vmp7c082d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r63fawbfm"/><path class="vmp7c082d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:app-minus-two-tone"} {...others} />);
}

export default Component;
