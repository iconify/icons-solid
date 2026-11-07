import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjrwwmc0f.css';
import '../../css/e/ezz2lob8j.css';
import '../../css/h/hhjxlf45r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jjrwwmc0f"/><path class="ezz2lob8j"/><path class="hhjxlf45r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-loud-broken"} {...others} />);
}

export default Component;
