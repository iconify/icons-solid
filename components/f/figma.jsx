import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpkzvpb9n.css';
import '../../css/c/cfaelwp8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jpkzvpb9n"/><path class="cfaelwp8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:figma"} {...others} />);
}

export default Component;
