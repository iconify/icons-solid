import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c61nzzbwc.css';
import '../../css/t/t637znb8o.css';
import '../../css/g/g4o455gcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c61nzzbwc"/><path class="t637znb8o"/><path class="g4o455gcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-spark"} {...others} />);
}

export default Component;
