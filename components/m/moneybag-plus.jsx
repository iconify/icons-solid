import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bx8fb1bcm.css';
import '../../css/u/uctgpiz0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bx8fb1bcm"/><path class="uctgpiz0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:moneybag-plus"} {...others} />);
}

export default Component;
