import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1_l0smrk.css';
import '../../css/l/l4cnxybxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v1_l0smrk"/><path class="l4cnxybxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shareplay"} {...others} />);
}

export default Component;
