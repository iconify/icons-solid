import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dufqe1b5r.css';
import '../../css/j/jj2eg2but.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dufqe1b5r"/><path class="jj2eg2but"/><path class="cipdabcte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-left-broken"} {...others} />);
}

export default Component;
