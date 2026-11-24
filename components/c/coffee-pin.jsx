import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6n88ti7w.css';
import '../../css/m/m7pbobbfo.css';
import '../../css/g/gvy_a0vfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r6n88ti7w"/><path class="m7pbobbfo"/><path class="gvy_a0vfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coffee-pin"} {...others} />);
}

export default Component;
