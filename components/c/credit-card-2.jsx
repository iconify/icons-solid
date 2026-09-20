import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ox7az0b5n.css';
import '../../css/c/cbw2w-bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ox7az0b5n"/><path class="cbw2w-bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:credit-card-2"} {...others} />);
}

export default Component;
