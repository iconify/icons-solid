import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c9-u-xb8e.css';
import '../../css/n/ni-43ubpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c9-u-xb8e"/><path class="ni-43ubpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:segway"} {...others} />);
}

export default Component;
