import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s66aa6-qs.css';
import '../../css/r/rmyq9_e8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s66aa6-qs"/><path class="rmyq9_e8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:meteor-off"} {...others} />);
}

export default Component;
