import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnxftvb0y.css';
import '../../css/r/r_a360ylm.css';
import '../../css/y/ywghp73jr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tnxftvb0y"/><path class="r_a360ylm"/><path class="ywghp73jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:certificate-2"} {...others} />);
}

export default Component;
