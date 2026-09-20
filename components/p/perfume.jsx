import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fquvxvb-f.css';
import '../../css/m/mcmh-2bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fquvxvb-f"/><path class="mcmh-2bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:perfume"} {...others} />);
}

export default Component;
