import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u0pes3b4a.css';
import '../../css/f/fsiexrbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u0pes3b4a"/><path class="fsiexrbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-top-right"} {...others} />);
}

export default Component;
