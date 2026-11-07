import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/li3goib3q.css';
import '../../css/b/b4q3fubjb.css';
import '../../css/e/e0cmz0boh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="li3goib3q"/><path class="b4q3fubjb"/><path class="e0cmz0boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-linear"} {...others} />);
}

export default Component;
