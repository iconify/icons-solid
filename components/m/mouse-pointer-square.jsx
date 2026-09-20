import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riira9pvx.css';
import '../../css/m/mqr7uytzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="riira9pvx"/><path class="mqr7uytzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse-pointer-square"} {...others} />);
}

export default Component;
