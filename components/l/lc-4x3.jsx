import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kmpqjhb9w.css';
import '../../css/g/go5xbnbte.css';
import '../../css/e/e9rmgbb5f.css';
import '../../css/i/ip1jaebgi.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="kmpqjhb9w"/><path class="go5xbnbte"/><path class="e9rmgbb5f"/><path class="ip1jaebgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lc-4x3"} {...others} />);
}

export default Component;
