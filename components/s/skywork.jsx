import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5zqrfbjz.css';
import '../../css/c/cjj93mxay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5zqrfbjz"/><path class="cjj93mxay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:skywork"} {...others} />);
}

export default Component;
