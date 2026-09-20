import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqx3-cbvw.css';
import '../../css/t/tbu-dnbhk.css';
import '../../css/v/vi7v816hp.css';
import '../../css/v/v60ok8_fu.css';
import '../../css/a/aitmbxqjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqx3-cbvw"/><path class="tbu-dnbhk"/><path class="vi7v816hp"/><path class="v60ok8_fu"/><path class="aitmbxqjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-basket-star"} {...others} />);
}

export default Component;
