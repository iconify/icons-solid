import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x3u-s_b7m.css';
import '../../css/d/dafffct5z.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x3u-s_b7m"/><path class="dafffct5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-blogger"} {...others} />);
}

export default Component;
