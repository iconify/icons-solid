import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t7l4jhy0j.css';
import '../../css/j/jre5zhbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t7l4jhy0j"/><path class="jre5zhbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-duotone"} {...others} />);
}

export default Component;
