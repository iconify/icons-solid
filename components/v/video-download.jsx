import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pxyg1sb5z.css';
import '../../css/l/lico50vda.css';
import '../../css/v/voojxubbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pxyg1sb5z"/><path class="lico50vda"/><path class="voojxubbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-download"} {...others} />);
}

export default Component;
