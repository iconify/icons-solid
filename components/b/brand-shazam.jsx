import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rbgykkbbq.css';
import '../../css/v/vayfs6bfv.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rbgykkbbq"/><path class="vayfs6bfv"/><path class="j7qjn6psg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-shazam"} {...others} />);
}

export default Component;
