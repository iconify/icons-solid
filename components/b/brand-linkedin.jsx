import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zm8x_0d1b.css';
import '../../css/p/p0k1vsbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zm8x_0d1b"/><path class="p0k1vsbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-linkedin"} {...others} />);
}

export default Component;
