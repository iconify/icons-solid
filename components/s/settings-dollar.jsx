import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oief6ya-c.css';
import '../../css/d/dtwaaintx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oief6ya-c"/><path class="dtwaaintx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-dollar"} {...others} />);
}

export default Component;
