import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw3ibw2qv.css';
import '../../css/z/zqwgowbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lw3ibw2qv"/><path class="zqwgowbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-kbin"} {...others} />);
}

export default Component;
