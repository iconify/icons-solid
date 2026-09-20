import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cra_kac9v.css';
import '../../css/l/ll7dpwb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cra_kac9v"/><path class="ll7dpwb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-doctrine"} {...others} />);
}

export default Component;
