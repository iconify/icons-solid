import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naa8kbbkv.css';
import '../../css/h/hcstxz92j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="naa8kbbkv"/><path class="hcstxz92j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-circle-pin"} {...others} />);
}

export default Component;
