import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7_zg5lyr.css';
import '../../css/r/ra8ngubdl.css';
import '../../css/m/mfhnhdc3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d7_zg5lyr"/><path class="ra8ngubdl"/><path class="mfhnhdc3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:beef-off"} {...others} />);
}

export default Component;
