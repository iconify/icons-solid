import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygnoyjg8p.css';
import '../../css/u/uc33igb-n.css';
import '../../css/y/ywzw80bph.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ygnoyjg8p"/><path class="uc33igb-n"/><path class="ywzw80bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:car-taxi-1-flat"} {...others} />);
}

export default Component;
