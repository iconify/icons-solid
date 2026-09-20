import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irhg7ey8h.css';
import '../../css/o/o3lpcab3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="irhg7ey8h"/><path class="o3lpcab3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-share"} {...others} />);
}

export default Component;
