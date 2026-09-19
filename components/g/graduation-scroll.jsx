import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kddnubb0l.css';
import '../../css/v/v5x384kor.css';
import '../../css/b/bnkzc605v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kddnubb0l"/><path class="v5x384kor"/><path class="bnkzc605v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:graduation-scroll"} {...others} />);
}

export default Component;
