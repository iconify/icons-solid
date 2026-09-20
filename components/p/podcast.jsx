import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nw_5eabqk.css';
import '../../css/k/kil06obbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nw_5eabqk"/><path class="kil06obbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podcast"} {...others} />);
}

export default Component;
