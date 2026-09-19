import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuqgrccsg.css';
import '../../css/o/obu153b6s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yuqgrccsg"/><path class="obu153b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-appflow"} {...others} />);
}

export default Component;
