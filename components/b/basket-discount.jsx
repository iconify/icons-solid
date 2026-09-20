import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv2ivpbyb.css';
import '../../css/i/id8yb0b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yv2ivpbyb"/><path class="id8yb0b3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-discount"} {...others} />);
}

export default Component;
