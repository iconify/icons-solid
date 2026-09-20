import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rfzvdobri.css';
import '../../css/t/tmw5m-bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rfzvdobri"/><path class="tmw5m-bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:weight"} {...others} />);
}

export default Component;
