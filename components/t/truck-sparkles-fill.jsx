import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8qjnpb3j.css';
import '../../css/o/oaqlpodrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j8qjnpb3j"/><path class="oaqlpodrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-sparkles-fill"} {...others} />);
}

export default Component;
