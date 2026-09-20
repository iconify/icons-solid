import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uvbc2lbfi.css';
import '../../css/o/ohys8lu6y.css';
import '../../css/j/j6ohuicfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uvbc2lbfi"/><path class="ohys8lu6y"/><path class="j6ohuicfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-right-broken"} {...others} />);
}

export default Component;
