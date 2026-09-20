import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd0iukbcm.css';
import '../../css/f/fn4m89e0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qd0iukbcm"/><path class="fn4m89e0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-4"} {...others} />);
}

export default Component;
