import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3_9-ebna.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/e/eelkazb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b3_9-ebna"/><path class="xon_9ib8a"/><path class="eelkazb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-sparkles-duotone"} {...others} />);
}

export default Component;
