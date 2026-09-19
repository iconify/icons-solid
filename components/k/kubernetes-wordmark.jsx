import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c846f2b3u.css';
import '../../css/c/c2gy29bva.css';
import '../../css/w/wj_gkq1ud.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c846f2b3u"/><path class="c2gy29bva"/><path class="wj_gkq1ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kubernetes-wordmark"} {...others} />);
}

export default Component;
