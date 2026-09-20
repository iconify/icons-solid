import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lm55fccqk.css';
import '../../css/v/voojxubbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lm55fccqk"/><path class="voojxubbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-cross"} {...others} />);
}

export default Component;
