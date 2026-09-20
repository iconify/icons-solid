import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmziwwv6e.css';
import '../../css/k/k89yax7bb.css';
import '../../css/h/h1-a8neue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mmziwwv6e"/><path class="k89yax7bb"/><path class="h1-a8neue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coffee-off"} {...others} />);
}

export default Component;
