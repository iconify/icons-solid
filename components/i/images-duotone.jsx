import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t05hsqxng.css';
import '../../css/z/zna5ofbfv.css';
import '../../css/g/ghonaacvc.css';
import '../../css/e/ed465-r6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t05hsqxng"/><path class="zna5ofbfv"/><path class="ghonaacvc"/><path class="ed465-r6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:images-duotone"} {...others} />);
}

export default Component;
