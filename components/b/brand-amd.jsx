import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ke7bnjbkk.css';
import '../../css/b/bvcgnnp3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ke7bnjbkk"/><path class="bvcgnnp3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-amd"} {...others} />);
}

export default Component;
