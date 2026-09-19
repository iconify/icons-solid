import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vywvb1b-v.css';
import '../../css/x/xkm97ebzi.css';
import '../../css/k/k6f33dbfd.css';
import '../../css/n/n6iih0rsh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vywvb1b-v"/><path class="xkm97ebzi"/><path class="k6f33dbfd"/><path class="n6iih0rsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:placard"} {...others} />);
}

export default Component;
