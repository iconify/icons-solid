import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqrc2ltvy.css';
import '../../css/u/uyisotbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yqrc2ltvy"/><path class="uyisotbmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-forward"} {...others} />);
}

export default Component;
