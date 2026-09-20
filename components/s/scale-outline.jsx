import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0k1vsbsw.css';
import '../../css/y/yx4cbx2ij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p0k1vsbsw"/><path class="yx4cbx2ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scale-outline"} {...others} />);
}

export default Component;
