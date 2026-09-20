import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i-ya2_b1u.css';
import '../../css/v/voojxubbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i-ya2_b1u"/><path class="voojxubbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-plus"} {...others} />);
}

export default Component;
