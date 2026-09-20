import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3dy2qmlr.css';
import '../../css/b/bzh91_bos.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x3dy2qmlr"/><path class="bzh91_bos"/><path class="cipdabcte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-right-line-duotone"} {...others} />);
}

export default Component;
