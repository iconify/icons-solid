import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv5_0figd.css';
import '../../css/c/cburmm70s.css';
import '../../css/z/zc9vryf_n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qv5_0figd"/><path class="cburmm70s"/><path class="zc9vryf_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hammer-and-wrench"} {...others} />);
}

export default Component;
