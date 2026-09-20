import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4hrv80mp.css';
import '../../css/f/fsp8jz4tu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r4hrv80mp"/><path class="fsp8jz4tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-ramp-left-3"} {...others} />);
}

export default Component;
