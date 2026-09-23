import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eso8e-ydo.css';
import '../../css/r/rgaweibev.css';
import '../../css/k/kpjfd_pxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eso8e-ydo"/><path class="rgaweibev"/><path class="kpjfd_pxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-sparkles-two-tone"} {...others} />);
}

export default Component;
