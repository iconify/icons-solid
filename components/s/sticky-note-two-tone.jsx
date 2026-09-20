import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kik400ipb.css';
import '../../css/a/a9nni14sc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kik400ipb"/><path class="a9nni14sc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-two-tone"} {...others} />);
}

export default Component;
