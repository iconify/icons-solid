import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xge3s_bpm.css';
import '../../css/t/t53_yfbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xge3s_bpm"/><path class="t53_yfbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:concierge-bell"} {...others} />);
}

export default Component;
