import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4_echbvg.css';
import '../../css/u/uikjppxol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w4_echbvg"/><path class="uikjppxol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:checkbox"} {...others} />);
}

export default Component;
