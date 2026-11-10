import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp1ojc_zq.css';
import '../../css/n/nucjxzbql.css';
import '../../css/u/uz5m12bll.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tp1ojc_zq"/><path class="nucjxzbql"/><path class="uz5m12bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nginx-wordmark"} {...others} />);
}

export default Component;
