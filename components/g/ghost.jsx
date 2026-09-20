import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uys7v5bcc.css';
import '../../css/l/l5th4ue5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uys7v5bcc"/><path class="l5th4ue5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ghost"} {...others} />);
}

export default Component;
