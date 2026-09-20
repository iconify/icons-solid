import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sa6ysrbbg.css';
import '../../css/x/x2qezhqsd.css';
import '../../css/g/gcdoqrbke.css';
import '../../css/l/l_n65lnlb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="sa6ysrbbg"/><path class="x2qezhqsd"/><path class="gcdoqrbke"/><path class="l_n65lnlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-news-logo"} {...others} />);
}

export default Component;
