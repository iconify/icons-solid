import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kdkuyrbea.css';
import '../../css/p/ph9rdd6re.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kdkuyrbea"/><path class="ph9rdd6re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:radar-off"} {...others} />);
}

export default Component;
