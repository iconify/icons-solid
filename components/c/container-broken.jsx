import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gkhuc5avb.css';
import '../../css/j/jtn-2gjed.css';
import '../../css/l/l2mlhf0lh.css';
import '../../css/k/ko8upge5x.css';
import '../../css/m/m3mjj18yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gkhuc5avb"/><path class="jtn-2gjed"/><path class="l2mlhf0lh"/><path class="ko8upge5x"/><path class="m3mjj18yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-broken"} {...others} />);
}

export default Component;
