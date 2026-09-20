import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8tjsabrk.css';
import '../../css/v/voa5iabbp.css';
import '../../css/y/y4n7jxi2m.css';
import '../../css/s/sj8o4_b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f8tjsabrk"/><path class="voa5iabbp"/><path class="y4n7jxi2m"/><path class="sj8o4_b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coins"} {...others} />);
}

export default Component;
