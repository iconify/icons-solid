import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mj32xlbaz.css';
import '../../css/z/zk3p-0b1p.css';
import '../../css/b/bcgmdbs9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mj32xlbaz"/><path class="zk3p-0b1p"/><path class="bcgmdbs9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brain-sparkles-two-tone"} {...others} />);
}

export default Component;
