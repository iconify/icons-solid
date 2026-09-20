import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdu1k6rkw.css';
import '../../css/l/ld24yvbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sdu1k6rkw"/><path class="ld24yvbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:blade"} {...others} />);
}

export default Component;
