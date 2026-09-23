import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-l6mmbkg.css';
import '../../css/t/t2f0xziff.css';
import '../../css/x/x-s2jvb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n-l6mmbkg"/><path class="t2f0xziff"/><path class="x-s2jvb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-sparkles-duotone"} {...others} />);
}

export default Component;
