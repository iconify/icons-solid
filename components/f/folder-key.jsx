import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hbwugwbae.css';
import '../../css/n/nrghjpb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hbwugwbae"/><circle class="nrghjpb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-key"} {...others} />);
}

export default Component;
