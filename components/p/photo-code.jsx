import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea4hx2bih.css';
import '../../css/k/kyghn6brt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ea4hx2bih"/><path class="kyghn6brt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-code"} {...others} />);
}

export default Component;
