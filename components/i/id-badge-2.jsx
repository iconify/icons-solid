import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9mg2c54k.css';
import '../../css/w/wh8zzmapl.css';
import '../../css/e/e6omrco6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i9mg2c54k"/><path class="wh8zzmapl"/><path class="e6omrco6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:id-badge-2"} {...others} />);
}

export default Component;
