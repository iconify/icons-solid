import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qi9nu3s_d.css';
import '../../css/r/rmrb0ibeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qi9nu3s_d"/><path class="rmrb0ibeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:trending-up-down"} {...others} />);
}

export default Component;
