import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38z5cbna.css';
import '../../css/r/r2630q13r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h38z5cbna"/><path class="r2630q13r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:badge-4k"} {...others} />);
}

export default Component;
