import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/km8umkb6d.css';
import '../../css/f/f91_gtbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="km8umkb6d"/><path class="f91_gtbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:hand"} {...others} />);
}

export default Component;
