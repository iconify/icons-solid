import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_kca498a.css';
import '../../css/j/jn20mc0cj.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d_kca498a"/><path class="jn20mc0cj"/><path class="cipdabcte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-right-broken"} {...others} />);
}

export default Component;
