import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qairory2t.css';
import '../../css/f/fdn-zee6s.css';
import '../../css/c/c2w5vy0ny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qairory2t"/><path class="fdn-zee6s"/><path class="c2w5vy0ny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-round-line-duotone"} {...others} />);
}

export default Component;
