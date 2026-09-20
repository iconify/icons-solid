import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6nbbibjt.css';
import '../../css/z/z0id2ro1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r6nbbibjt"/><path class="z0id2ro1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-off"} {...others} />);
}

export default Component;
