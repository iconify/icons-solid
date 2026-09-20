import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/itbkk3lcb.css';
import '../../css/m/m3pl5ubmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="itbkk3lcb"/><path class="m3pl5ubmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plug-fill"} {...others} />);
}

export default Component;
