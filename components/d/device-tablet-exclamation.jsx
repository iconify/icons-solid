import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv8ncebee.css';
import '../../css/f/fic-c8lml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bv8ncebee"/><path class="fic-c8lml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-exclamation"} {...others} />);
}

export default Component;
