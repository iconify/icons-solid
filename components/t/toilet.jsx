import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m42c9_cfw.css';
import '../../css/o/odnjp3bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m42c9_cfw"/><path class="odnjp3bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:toilet"} {...others} />);
}

export default Component;
