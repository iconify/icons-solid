import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/abygco3fz.css';
import '../../css/n/ni6jsiptm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="abygco3fz"/><path class="ni6jsiptm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-dot-two-tone"} {...others} />);
}

export default Component;
