import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wyqiz5gch.css';
import '../../css/f/fau4o9bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wyqiz5gch"/><path class="fau4o9bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-bear-left-2"} {...others} />);
}

export default Component;
