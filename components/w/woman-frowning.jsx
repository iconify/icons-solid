import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz4nh0bqh.css';
import '../../css/l/ll2dvhb-d.css';
import '../../css/n/n8o1_4bxc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kz4nh0bqh"/><path class="ll2dvhb-d"/><path class="n8o1_4bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-frowning"} {...others} />);
}

export default Component;
