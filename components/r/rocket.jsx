import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bvmclp7ec.css';
import '../../css/r/rwzdm_b6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bvmclp7ec"/><path class="rwzdm_b6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rocket"} {...others} />);
}

export default Component;
