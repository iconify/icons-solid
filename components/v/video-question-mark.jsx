import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/voojxubbp.css';
import '../../css/j/j-ha059fn.css';
import '../../css/d/d7ghspp-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="voojxubbp"/><path class="j-ha059fn"/><path class="d7ghspp-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-question-mark"} {...others} />);
}

export default Component;
