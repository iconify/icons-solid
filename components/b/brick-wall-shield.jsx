import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/begac2b9o.css';
import '../../css/g/g93du3baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="begac2b9o"/><path class="g93du3baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brick-wall-shield"} {...others} />);
}

export default Component;
