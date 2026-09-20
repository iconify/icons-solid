import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utox1qbcx.css';
import '../../css/j/jsoz6_bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utox1qbcx"/><path class="jsoz6_bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-duotone"} {...others} />);
}

export default Component;
