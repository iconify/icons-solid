import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfr_vgb3m.css';
import '../../css/v/v14vvxr5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mfr_vgb3m"/><path class="v14vvxr5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-ccw-square"} {...others} />);
}

export default Component;
