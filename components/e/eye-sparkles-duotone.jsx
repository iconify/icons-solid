import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s85zem2-k.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/i/i2j9gzb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s85zem2-k"/><path class="xon_9ib8a"/><path class="i2j9gzb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-sparkles-duotone"} {...others} />);
}

export default Component;
