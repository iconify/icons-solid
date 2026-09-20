import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rff9xebkb.css';
import '../../css/x/xo-fi5bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rff9xebkb"/><path class="xo-fi5bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:report-off"} {...others} />);
}

export default Component;
