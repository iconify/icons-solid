import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhh05tb7v.css';
import '../../css/a/ayxx-hbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhh05tb7v"/><path class="ayxx-hbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:door-line"} {...others} />);
}

export default Component;
