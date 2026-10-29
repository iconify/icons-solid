import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e5-xx9b2v.css';
import '../../css/t/tyv5asbam.css';
import '../../css/n/n8f7ss6vj.css';
import '../../css/v/v-vraybzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e5-xx9b2v"/><path class="tyv5asbam wm-a"/><path class="n8f7ss6vj wm-k"/><path class="v-vraybzh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-alert-sketch"} {...others} />);
}

export default Component;
