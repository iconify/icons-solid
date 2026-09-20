import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls_v-kbfe.css';
import '../../css/c/cz46b-bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ls_v-kbfe"/><rect class="cz46b-bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tickets-plane"} {...others} />);
}

export default Component;
