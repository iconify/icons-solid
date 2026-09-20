import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o66hdacmz.css';
import '../../css/v/v3_i21mvc.css';
import '../../css/h/hot5gjbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o66hdacmz"/><path class="v3_i21mvc"/><path class="hot5gjbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-solidjs"} {...others} />);
}

export default Component;
