import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5tlhhb4e.css';
import '../../css/u/u0pes3b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h5tlhhb4e"/><path class="u0pes3b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-chevron-down"} {...others} />);
}

export default Component;
