import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j25d9_dab.css';
import '../../css/p/p8bzgqbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j25d9_dab"/><path class="p8bzgqbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:droplet-off"} {...others} />);
}

export default Component;
