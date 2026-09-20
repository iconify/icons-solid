import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a70wfjbze.css';
import '../../css/g/gydxa6b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a70wfjbze"/><path class="gydxa6b-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-pocket"} {...others} />);
}

export default Component;
