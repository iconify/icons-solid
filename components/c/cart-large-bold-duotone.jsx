import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pirn0_bio.css';
import '../../css/n/n7c4a2awt.css';
import '../../css/n/nkg6ymbnc.css';
import '../../css/d/daleh4b4i.css';
import '../../css/z/zcwku4x5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pirn0_bio"/><path class="n7c4a2awt"/><path class="nkg6ymbnc"/><path class="daleh4b4i"/><path class="zcwku4x5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-bold-duotone"} {...others} />);
}

export default Component;
