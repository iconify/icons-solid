import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nz_3oac1x.css';
import '../../css/r/rhmw_vzxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nz_3oac1x"/><path class="rhmw_vzxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-heart"} {...others} />);
}

export default Component;
