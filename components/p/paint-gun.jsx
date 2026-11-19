import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p20adwbpg.css';
import '../../css/o/oua8bue4c.css';
import '../../css/c/c-hdtesmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p20adwbpg"/><path class="oua8bue4c"/><rect class="c-hdtesmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:paint-gun"} {...others} />);
}

export default Component;
