import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxe9qybvx.css';
import '../../css/c/cf9iclbcl.css';
import '../../css/v/vvcbnb20d.css';
import '../../css/w/wzkpbm-3u.css';
import '../../css/s/s2u78o17p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mxe9qybvx"/><path class="cf9iclbcl"/><path class="vvcbnb20d"/><path class="wzkpbm-3u"/><path class="s2u78o17p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oyster"} {...others} />);
}

export default Component;
