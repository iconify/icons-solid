import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wnfyxhgkc.css';
import '../../css/h/ht2dh_bbo.css';
import '../../css/k/k628_qb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wnfyxhgkc"/><path class="ht2dh_bbo"/><path class="k628_qb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-alert"} {...others} />);
}

export default Component;
