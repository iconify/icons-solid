import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nrofxzq4j.css';
import '../../css/t/t8tu1tbck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nrofxzq4j"/><path class="t8tu1tbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rv-truck"} {...others} />);
}

export default Component;
